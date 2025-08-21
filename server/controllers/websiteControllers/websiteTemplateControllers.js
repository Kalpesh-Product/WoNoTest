const sharp = require("sharp");
const WebsiteTemplate = require("../../models/website/WebsiteTemplate");
const { handleFileUpload } = require("../../config/cloudinaryConfig");
const Company = require("../../models/hr/Company");
const mongoose = require("mongoose");

const createTemplate = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // const { company } = req;
    const company = "Biznest";

    let { products, testimonials } = req.body;
    products = JSON.parse(products || "[]");
    testimonials = JSON.parse(testimonials || "[]");

    for (const k of Object.keys(req.body)) {
      if (/^(products|testimonials)\.\d+\./.test(k)) delete req.body[k];
    }

    const foundCompany = await Company.findById(company).session(session);

    const formatCompanyName = (name) => {
      if (!name) return "";
      return name.toLowerCase().split("-")[0].replace(/\s+/g, "");
    };

    const searchKey = formatCompanyName(req.body.companyName);
    const baseFolder = `${foundCompany.companyName}/template/${searchKey}`;

    let template = await WebsiteTemplate.findOne({ searchKey }).session(
      session
    );
    if (template) {
      await session.abortTransaction();
      session.endSession();
      return res
        .status(400)
        .json({ message: "Template for this company already exists" });
    }

    template = new WebsiteTemplate({
      searchKey,
      companyName: req.body.companyName,
      title: req.body.title,
      subTitle: req.body.subTitle,
      CTAButtonText: req.body.CTAButtonText,
      about: req.body.about,
      productTitle: req.body?.productTitle,
      galleryTitle: req.body?.galleryTitle,
      testimonialTitle: req.body.testimonialTitle,
      contactTitle: req.body.contactTitle,
      mapUrl: req.body.mapUrl,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      registeredCompanyName: req.body.registeredCompanyName,
      copyrightText: req.body.copyrightText,
      products: [],
      testimonials: [],
    });

    // Helper: upload an array of multer files to a folder
    const uploadImages = async (files = [], folder) => {
      const arr = [];
      for (const file of files) {
        const buffer = await sharp(file.buffer)
          .webp({ quality: 80 })
          .toBuffer();
        const base64Image = `data:image/webp;base64,${buffer.toString(
          "base64"
        )}`;
        const uploadResult = await handleFileUpload(base64Image, folder);
        arr.push({ id: uploadResult.public_id, url: uploadResult.secure_url });
      }
      return arr;
    };

    // Multer.any puts files in req.files (array). Build a quick index by fieldname.
    const filesByField = {};
    for (const f of req.files || []) {
      if (!filesByField[f.fieldname]) filesByField[f.fieldname] = [];
      filesByField[f.fieldname].push(f);
    }

    // companyLogo
    // companyLogo (ensure it's a single file)
    if (filesByField.companyLogo && filesByField.companyLogo[0]) {
      const logoFile = filesByField.companyLogo[0];
      const buffer = await sharp(logoFile.buffer)
        .webp({ quality: 80 })
        .toBuffer();
      const base64Image = `data:image/webp;base64,${buffer.toString("base64")}`;
      const uploadResult = await handleFileUpload(
        base64Image,
        `${baseFolder}/companyLogo`
      );
      template.companyLogo = {
        id: uploadResult.public_id,
        url: uploadResult.secure_url,
      };
    }

    // heroImages
    if (filesByField.heroImages?.length) {
      template.heroImages = await uploadImages(
        filesByField.heroImages,
        `${baseFolder}/heroImages`
      );
    }

    // gallery
    if (filesByField.gallery?.length) {
      template.gallery = await uploadImages(
        filesByField.gallery,
        `${baseFolder}/gallery`
      );
    }

    if (Array.isArray(products) && products.length) {
      for (let i = 0; i < products.length; i++) {
        const p = products[i] || {};
        const pFiles = filesByField[`productImages_${i}`] || [];
        const uploaded = await uploadImages(
          pFiles,
          `${baseFolder}/productImages/${i}`
        );

        template.products.push({
          type: p.type,
          name: p.name,
          cost: p.cost,
          description: p.description,
          images: uploaded,
        });
      }
    }

    // TESTIMONIALS: objects + flat testimonialImages array (zip by index)
    let tUploads = [];
    if (filesByField.testimonialImages?.length) {
      // Preferred new path: single field 'testimonialImages' with N files in order
      tUploads = await uploadImages(
        filesByField.testimonialImages,
        `${baseFolder}/testimonialImages`
      );
    } else {
      // Back-compat: testimonialImages_${i}
      for (let i = 0; i < testimonials.length; i++) {
        const tFiles = filesByField[`testimonialImages_${i}`] || [];
        const uploaded = await uploadImages(
          tFiles,
          `${baseFolder}/testimonialImages/${i}`
        );
        tUploads[i] = uploaded[0]; // one file per testimonial
      }
    }

    template.testimonials = (testimonials || []).map((t, i) => ({
      image: tUploads[i], // may be undefined if fewer images
      name: t.name,
      jobPosition: t.jobPosition,
      testimony: t.testimony,
      rating: t.rating,
    }));

    await template.save({ session });
    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ message: "Template created", template });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

const getTemplate = async (req, res) => {
  try {
    const { company } = req.params;

    const templates = await WebsiteTemplate.findOne({
      searchKey: company,
    });

    console.log("get-template");
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const editTemplate = async (req, res, next) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const { company } = req;
//     let { products, testimonials } = req.body;

//     products = JSON.parse(products || "[]");
//     testimonials = JSON.parse(testimonials || "[]");

//     const foundCompany = await Company.findById(company).session(session);

//     const formatCompanyName = (name) => {
//       if (!name) return "";
//       return name.toLowerCase().split("-")[0].replace(/\s+/g, "");
//     };

//     const searchKey = formatCompanyName(req.body.companyName);
//     const baseFolder = `${foundCompany.companyName}/template/${searchKey}`;

//     let template = await WebsiteTemplate.findOne({ searchKey }).session(
//       session
//     );
//     if (!template) {
//       await session.abortTransaction();
//       session.endSession();
//       return res.status(404).json({ message: "Template not found" });
//     }

//     // ✅ update text fields
//     Object.assign(template, {
//       companyName: req.body.companyName ?? template.companyName,
//       title: req.body.title ?? template.title,
//       subTitle: req.body.subTitle ?? template.subTitle,
//       CTAButtonText: req.body.CTAButtonText ?? template.CTAButtonText,
//       about: req.body.about ?? template.about,
//       productTitle: req.body.productTitle ?? template.productTitle,
//       galleryTitle: req.body.galleryTitle ?? template.galleryTitle,
//       testimonialTitle: req.body.testimonialTitle ?? template.testimonialTitle,
//       contactTitle: req.body.contactTitle ?? template.contactTitle,
//       mapUrl: req.body.mapUrl ?? template.mapUrl,
//       email: req.body.email ?? template.email,
//       phone: req.body.phone ?? template.phone,
//       address: req.body.address ?? template.address,
//       registeredCompanyName:
//         req.body.registeredCompanyName ?? template.registeredCompanyName,
//       copyrightText: req.body.copyrightText ?? template.copyrightText,
//     });

//     // Helper: upload multiple images
//     const uploadImages = async (files = [], folder) => {
//       const arr = [];
//       for (const file of files) {
//         const buffer = await sharp(file.buffer)
//           .webp({ quality: 80 })
//           .toBuffer();
//         const base64Image = `data:image/webp;base64,${buffer.toString(
//           "base64"
//         )}`;
//         const uploadResult = await handleFileUpload(base64Image, folder);
//         arr.push({ id: uploadResult.public_id, url: uploadResult.secure_url });
//       }
//       return arr;
//     };

//     // build filesByField
//     const filesByField = {};
//     for (const f of req.files || []) {
//       if (!filesByField[f.fieldname]) filesByField[f.fieldname] = [];
//       filesByField[f.fieldname].push(f);
//     }

//     // companyLogo (replace, single)
//     if (filesByField.companyLogo?.[0]) {
//       const buffer = await sharp(filesByField.companyLogo[0].buffer)
//         .webp({ quality: 80 })
//         .toBuffer();
//       const base64Image = `data:image/webp;base64,${buffer.toString("base64")}`;
//       const uploadResult = await handleFileUpload(
//         base64Image,
//         `${baseFolder}/companyLogo`
//       );
//       template.companyLogo = {
//         id: uploadResult.public_id,
//         url: uploadResult.secure_url,
//       };
//     }

//     // heroImages (append)
//     if (filesByField.heroImages?.length) {
//       const uploaded = await uploadImages(
//         filesByField.heroImages,
//         `${baseFolder}/heroImages`
//       );
//       template.heroImages = [...(template.heroImages || []), ...uploaded];
//     }

//     // gallery (append)
//     if (filesByField.gallery?.length) {
//       const uploaded = await uploadImages(
//         filesByField.gallery,
//         `${baseFolder}/gallery`
//       );
//       template.gallery = [...(template.gallery || []), ...uploaded];
//     }

//     // products (append images per product)
//     if (Array.isArray(products) && products.length) {
//       for (let i = 0; i < products.length; i++) {
//         const p = products[i];
//         const pFiles = filesByField[`productImages_${i}`] || [];
//         const uploaded = await uploadImages(
//           pFiles,
//           `${baseFolder}/productImages/${i}`
//         );

//         if (template.products[i]) {
//           // ✅ update + append
//           template.products[i] = {
//             ...template.products[i],
//             type: p.type ?? template.products[i].type,
//             name: p.name ?? template.products[i].name,
//             cost: p.cost ?? template.products[i].cost,
//             description: p.description ?? template.products[i].description,
//             images: [...(template.products[i].images || []), ...uploaded],
//           };
//         } else {
//           // new product
//           template.products.push({
//             type: p.type,
//             name: p.name,
//             cost: p.cost,
//             description: p.description,
//             images: uploaded,
//           });
//         }
//       }
//     }

//     // testimonials (append image if new uploaded)
//     let tUploads = [];
//     if (filesByField.testimonialImages?.length) {
//       tUploads = await uploadImages(
//         filesByField.testimonialImages,
//         `${baseFolder}/testimonialImages`
//       );
//     } else {
//       for (let i = 0; i < testimonials.length; i++) {
//         const tFiles = filesByField[`testimonialImages_${i}`] || [];
//         const uploaded = await uploadImages(
//           tFiles,
//           `${baseFolder}/testimonialImages/${i}`
//         );
//         tUploads[i] = uploaded[0];
//       }
//     }

//     testimonials.forEach((t, i) => {
//       if (template.testimonials[i]) {
//         template.testimonials[i] = {
//           ...template.testimonials[i],
//           name: t.name ?? template.testimonials[i].name,
//           jobPosition: t.jobPosition ?? template.testimonials[i].jobPosition,
//           testimony: t.testimony ?? template.testimonials[i].testimony,
//           rating: t.rating ?? template.testimonials[i].rating,
//           image: tUploads[i]
//             ? template.testimonials[i].image
//               ? { ...template.testimonials[i].image, ...tUploads[i] } // merge
//               : tUploads[i]
//             : template.testimonials[i].image,
//         };
//       } else {
//         template.testimonials.push({
//           ...t,
//           image: tUploads[i],
//         });
//       }
//     });

//     await template.save({ session });
//     await session.commitTransaction();
//     session.endSession();

//     res.status(200).json({ message: "Template updated", template });
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     next(error);
//   }
// };

module.exports = {
  createTemplate,
  // editTemplate,
  getTemplate,
};
