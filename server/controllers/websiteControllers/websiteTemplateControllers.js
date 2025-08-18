const sharp = require("sharp");
const WebsiteTemplate = require("../../models/website/WebsiteTemplate");
const { handleFileUpload } = require("../../config/cloudinaryConfig");
const Company = require("../../models/hr/Company");

const createTemplate = async (req, res, next) => {
  try {
    const { company } = req;

    const foundCompany = await Company.findById(company);

    const formatCompanyName = (name) => {
      if (!name) return "";
      return name.toLowerCase().split("-")[0].replace(/\s+/g, "");
    };
    const searchKey = formatCompanyName(req.body.companyName);
    const baseFolder = `${foundCompany}/template/${searchKey}`;
    let template = await WebsiteTemplate.findOne({ searchKey });

    // if template exists → update, else → create
    // if (!template) {
    //   template = new WebsiteTemplate({ ...req.body, searchKey });
    // } else {
    //   Object.assign(template, req.body); // merge new values
    // }

    if (template) {
      return res
        .status(400)
        .json({ message: "Template for this company already exists" });
    }

    template = new WebsiteTemplate({ ...req.body, searchKey });

    // upload hero images
    if (req.files?.heroImages) {
      template.heroImages = [];
      for (const file of req.files.heroImages) {
        const buffer = await sharp(file.buffer)
          .webp({ quality: 80 })
          .toBuffer();
        const base64Image = `data:image/webp;base64,${buffer.toString(
          "base64"
        )}`;
        const uploadResult = await handleFileUpload(
          base64Image,
          `${baseFolder}/heroImages`
        );

        template.heroImages.push({
          id: uploadResult.public_id,
          url: uploadResult.secure_url,
        });
      }
    }

    // upload gallery images
    if (req.files?.gallery) {
      template.gallery = [];
      for (const file of req.files.gallery) {
        const buffer = await sharp(file.buffer)
          .webp({ quality: 80 })
          .toBuffer();
        const base64Image = `data:image/webp;base64,${buffer.toString(
          "base64"
        )}`;
        const uploadResult = await handleFileUpload(
          base64Image,
          `${baseFolder}/gallery`
        );

        template.gallery.push({
          id: uploadResult.public_id,
          url: uploadResult.secure_url,
        });
      }
    }

    //handle product images
    if (req.files?.productImages) {
      template.products = [];
      for (const file of req.files.productImages) {
        const buffer = await sharp(file.buffer)
          .webp({ quality: 80 })
          .toBuffer();
        const base64Image = `data:image/webp;base64,${buffer.toString(
          "base64"
        )}`;
        const uploadResult = await handleFileUpload(
          base64Image,
          `${baseFolder}/productImages`
        );

        template.products.push({
          image: {
            id: uploadResult.public_id,
            url: uploadResult.secure_url,
          },
        });
      }
    }

    //upload
    if (req.files?.testimonialImages) {
      template.testimonials = [];
      for (const file of req.files.testimonialImages) {
        const buffer = await sharp(file.buffer)
          .webp({ quality: 80 })
          .toBuffer();
        const base64Image = `data:image/webp;base64,${buffer.toString(
          "base64"
        )}`;
        const uploadResult = await handleFileUpload(
          base64Image,
          `${baseFolder}/testimonialImages`
        );

        template.testimonials.push({
          image: {
            id: uploadResult.public_id,
            url: uploadResult.secure_url,
          },
        });
      }
    }

    await template.save();

    res.status(201).json({
      message: template.isNew ? "Template created" : "Template updated",
      template,
    });
  } catch (error) {
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

module.exports = {
  createTemplate,
  getTemplate,
};
