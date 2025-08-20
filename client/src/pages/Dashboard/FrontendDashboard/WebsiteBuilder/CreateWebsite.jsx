import React, { useRef } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { TextField, MenuItem, CircularProgress } from "@mui/material";
import PageFrame from "../../../../components/Pages/PageFrame";
import PrimaryButton from "../../../../components/PrimaryButton";
import SecondaryButton from "../../../../components/SecondaryButton";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import UploadMultipleFilesInput from "../../../../components/UploadMultipleFilesInput";
import UploadFileInput from "../../../../components/UploadFileInput";

const defaultProduct = {
  type: "",
  name: "",
  cost: "",
  description: "",
};

const defaultTestimonial = {
  name: "",
  jobPosition: "",
  testimony: "",
  rating: 5,
};

const CreateWebsite = () => {
  const axios = useAxiosPrivate();
  const formRef = useRef(null);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // hero/company
      companyName: "",
      title: "",
      subTitle: "",
      CTAButtonText: "",
      heroImages: [],
      gallery: [],
      // about
      about: "",
      // products
      productTitle: "",
      products: [defaultProduct],
      // gallery
      galleryTitle: "",
      // testimonials
      testimonialTitle: "",
      testimonials: [defaultTestimonial],
      // contact
      contactTitle: "",
      mapUrl: "",
      email: "",
      phone: "",
      address: "",
      // footer
      registeredCompanyName: "",
      copyrightText: "",
    },
  });

  const {
    fields: productFields,
    append: appendProduct,
    remove: removeProduct,
  } = useFieldArray({ control, name: "products" });

  const {
    fields: testimonialFields,
    append: appendTestimonial,
    remove: removeTestimonial,
  } = useFieldArray({ control, name: "testimonials" });

  const onSubmit = (values, e) => {
    const formEl = e?.target || formRef.current;
    const fd = new FormData(formEl);

    // Replace structured arrays with JSON
    const productsMeta = (values.products || []).map((p) => ({
      type: p.type,
      name: p.name,
      subtitle: p.subtitle,
      cost: p.cost,
      description: p.description,
    }));
    const testimonialsMeta = (values.testimonials || []).map((t) => ({
      name: t.name,
      jobPosition: t.jobPosition,
      testimony: t.testimony,
      rating: Number(t.rating) || 0,
    }));
    fd.set("products", JSON.stringify(productsMeta));
    fd.set("testimonials", JSON.stringify(testimonialsMeta));

    for (const key of Array.from(fd.keys())) {
      if (/^(products|testimonials)\.\d+\./.test(key)) fd.delete(key);
    }

    fd.delete("heroImages");
    (values.heroImages || []).forEach((file) => fd.append("heroImages", file));

    fd.delete("gallery");
    (values.gallery || []).forEach((file) => fd.append("gallery", file));

    fd.delete("productImages");
    (values.products || []).forEach((p, i) => {
      (p.files || []).forEach((f) => fd.append(`productImages_${i}`, f));
    });

    fd.delete("testimonialImages");
    (values.testimonials || []).forEach((t, i) => {
      if (t?.file) fd.append(`testimonialImages_${i}`, t.file);
    });

    createWebsite(fd);
  };

  const { mutate: createWebsite, isPending: isCreateWebsite } = useMutation({
    mutationKey: ["create-website"],
    mutationFn: async (fd) => {
      const res = await axios.post("/api/editor/create-website", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Website created successfully");
      reset();
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Failed to create website");
    },
  });

  const handleReset = () => {
    const node = formRef.current;
    node && node.reset();
    reset();
  };

  return (
    <div>
      {!isCreateWebsite ? (
        <div className="p-4 flex flex-col gap-4">
          <div className="themePage-content-header bg-white flex flex-col gap-4">
            <h4 className="text-4xl text-left">Create Website</h4>
            <hr />
          </div>

          <form
            ref={formRef}
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
              {/* HERO / COMPANY */}
              <div>
                <div className="py-4 border-b-default border-borderGray">
                  <span className="text-subtitle font-pmedium">
                    Hero Section
                  </span>
                </div>
                <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4 ">
                  <Controller
                    name="companyName"
                    control={control}
                    rules={{ required: "Company name is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Company Name"
                        fullWidth
                        helperText={errors?.companyName?.message}
                        error={!!errors.companyName}
                      />
                    )}
                  />
                  <Controller
                    name="title"
                    control={control}
                    rules={{ required: "Title is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Hero Title"
                        fullWidth
                        helperText={errors?.title?.message}
                        error={!!errors.title}
                      />
                    )}
                  />
                  <Controller
                    name="subTitle"
                    control={control}
                    rules={{ required: "Sub Title is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Hero Sub Title"
                        fullWidth
                        helperText={errors?.subTitle?.message}
                        error={!!errors.subTitle}
                      />
                    )}
                  />
                  <Controller
                    name="CTAButtonText"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="CTA Button Text"
                        fullWidth
                      />
                    )}
                  />

                  {/* companyLogo (single) */}

                  <Controller
                    name="companyLogo"
                    control={control}
                    render={({ field }) => (
                      <UploadFileInput
                        id="companyLogo"
                        value={field.value}
                        label="Company Logo"
                        onChange={field.onChange}
                      />
                    )}
                  />

                  {/* heroImages (multiple) */}
                  <Controller
                    name="heroImages"
                    control={control}
                    render={({ field }) => (
                      <UploadMultipleFilesInput
                        {...field}
                        name="heroImages" // important so FormData picks the files
                        label="Hero Images"
                        maxFiles={5}
                        allowedExtensions={[
                          "jpg",
                          "jpeg",
                          "png",
                          "pdf",
                          "webp",
                        ]}
                        id="heroImages"
                      />
                    )}
                  />
                </div>
              </div>

              {/* ABOUT */}
              <div>
                <div className="py-4 border-b-default border-borderGray">
                  <span className="text-subtitle font-pmedium">About</span>
                </div>
                <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4 ">
                  <Controller
                    name="about"
                    control={control}
                    rules={{ required: "About is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="About"
                        fullWidth
                        multiline
                        minRows={3}
                        helperText={errors?.about?.message}
                        error={!!errors.about}
                      />
                    )}
                  />
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="col-span-2">
                <div className="py-4 border-b-default border-borderGray">
                  <span className="text-subtitle font-pmedium">Products</span>
                </div>
                <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4 ">
                  <Controller
                    name="productTitle"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Products Section Title"
                        fullWidth
                      />
                    )}
                  />

                  {productFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="rounded-xl border border-borderGray p-4 mb-3"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-pmedium">
                          Product #{index + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeProduct(index)}
                          className="text-sm text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Controller
                          name={`products.${index}.type`}
                          control={control}
                          rules={{ required: "Type is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              label="Type"
                              fullWidth
                              helperText={
                                errors?.products?.[index]?.type?.message
                              }
                              error={!!errors?.products?.[index]?.type}
                            />
                          )}
                        />
                        <Controller
                          name={`products.${index}.name`}
                          control={control}
                          rules={{ required: "Name is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              label="Name"
                              fullWidth
                              helperText={
                                errors?.products?.[index]?.name?.message
                              }
                              error={!!errors?.products?.[index]?.name}
                            />
                          )}
                        />
                        
                        <Controller
                          name={`products.${index}.cost`}
                          control={control}
                          rules={{ required: "Cost is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              label="Cost"
                              fullWidth
                              helperText={
                                errors?.products?.[index]?.cost?.message
                              }
                              error={!!errors?.products?.[index]?.cost}
                            />
                          )}
                        />
                        <Controller
                          name={`products.${index}.description`}
                          control={control}
                          rules={{ required: "Description is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              label="Description"
                              fullWidth
                              multiline
                              minRows={3}
                              helperText={
                                errors?.products?.[index]?.description?.message
                              }
                              error={!!errors?.products?.[index]?.description}
                            />
                          )}
                        />
                         {/* productImages_${index} (multiple) */}
                      
                      <Controller
                        name={`products.${index}.files`}
                        control={control}
                        render={({ field }) => (
                          <UploadMultipleFilesInput
                            {...field}
                            label="Product Images"
                            maxFiles={15}
                            allowedExtensions={[
                              "jpg",
                              "jpeg",
                              "png",
                              "webp",
                              "pdf",
                            ]}
                            id={`products.${index}.files`}
                          />
                        )}
                      />
                      </div>

                     
                    </div>
                  ))}

                  <div>
                    <button
                      type="button"
                      onClick={() => appendProduct({ ...defaultProduct })}
                      className="text-sm text-primary"
                    >
                      + Add Product
                    </button>
                  </div>
                </div>
              </div>

              {/* GALLERY */}
              <div>
                <div className="py-4 border-b-default border-borderGray">
                  <span className="text-subtitle font-pmedium">Gallery</span>
                </div>
                <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4 ">
                  <Controller
                    name="galleryTitle"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Gallery Section Title"
                        fullWidth
                      />
                    )}
                  />

                  <Controller
                    name="gallery"
                    control={control}
                    render={({ field }) => (
                      <UploadMultipleFilesInput
                        {...field}
                        name="gallery"
                        label="Gallery Images"
                        maxFiles={10}
                        allowedExtensions={[
                          "jpg",
                          "jpeg",
                          "png",
                          "pdf",
                          "webp",
                        ]}
                        id="gallery"
                      />
                    )}
                  />
                </div>
              </div>

              {/* TESTIMONIALS */}
              <div className="col-span-2">
                <div className="py-4 border-b-default border-borderGray">
                  <span className="text-subtitle font-pmedium">
                    Testimonials
                  </span>
                </div>
                <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4 ">
                  <Controller
                    name="testimonialTitle"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Testimonials Section Title"
                        fullWidth
                      />
                    )}
                  />

                  {testimonialFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="rounded-xl border border-borderGray p-4 mb-3"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-pmedium">
                          Testimonial #{index + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeTestimonial(index)}
                          className="text-sm text-red-600"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Controller
                          name={`testimonials.${index}.name`}
                          control={control}
                          rules={{ required: "Name is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              label="Name"
                              fullWidth
                              helperText={
                                errors?.testimonials?.[index]?.name?.message
                              }
                              error={!!errors?.testimonials?.[index]?.name}
                            />
                          )}
                        />
                        <Controller
                          name={`testimonials.${index}.jobPosition`}
                          control={control}
                          rules={{ required: "Job Position is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              label="Job Position"
                              fullWidth
                              helperText={
                                errors?.testimonials?.[index]?.jobPosition
                                  ?.message
                              }
                              error={
                                !!errors?.testimonials?.[index]?.jobPosition
                              }
                            />
                          )}
                        />
                        <Controller
                          name={`testimonials.${index}.rating`}
                          control={control}
                          rules={{ required: "Rating is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              type="number"
                              size="small"
                              label="Rating (1-5)"
                              fullWidth
                              inputProps={{ min: 1, max: 5 }}
                              helperText={
                                errors?.testimonials?.[index]?.rating?.message
                              }
                              error={!!errors?.testimonials?.[index]?.rating}
                            />
                          )}
                        />
                        <Controller
                          name={`testimonials.${index}.testimony`}
                          control={control}
                          rules={{ required: "Testimony is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              label="Testimony"
                              fullWidth
                              multiline
                              minRows={3}
                              helperText={
                                errors?.testimonials?.[index]?.testimony
                                  ?.message
                              }
                              error={!!errors?.testimonials?.[index]?.testimony}
                            />
                          )}
                        />
                      </div>

                      {/* testimonialImages_${index} (single) */}
                      <Controller
                        name={`testimonials.${index}.file`}
                        control={control}
                        render={({ field }) => (
                          <UploadFileInput
                            value={field.value}
                            label="Testimonial Image"
                            onChange={field.onChange}
                            id={`testimonial-file-${index}`}
                          />
                        )}
                      />
                    </div>
                  ))}

                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        appendTestimonial({ ...defaultTestimonial })
                      }
                      className="text-sm text-primary"
                    >
                      + Add Testimonial
                    </button>
                  </div>
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <div className="py-4 border-b-default border-borderGray">
                  <span className="text-subtitle font-pmedium">Contact</span>
                </div>
                <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4 ">
                  <Controller
                    name="contactTitle"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Contact Section Title"
                        fullWidth
                      />
                    )}
                  />
                  <Controller
                    name="mapUrl"
                    control={control}
                    rules={{ required: "Map URL is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Map URL"
                        fullWidth
                        helperText={errors?.mapUrl?.message}
                        error={!!errors.mapUrl}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Email"
                        fullWidth
                        helperText={errors?.email?.message}
                        error={!!errors.email}
                      />
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Phone is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Phone"
                        fullWidth
                        helperText={errors?.phone?.message}
                        error={!!errors.phone}
                      />
                    )}
                  />
                  <Controller
                    name="address"
                    control={control}
                    rules={{ required: "Address is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Address"
                        fullWidth
                        multiline
                        minRows={2}
                        helperText={errors?.address?.message}
                        error={!!errors.address}
                      />
                    )}
                  />
                </div>
              </div>

              {/* FOOTER */}
              <div>
                <div className="py-4 border-b-default border-borderGray">
                  <span className="text-subtitle font-pmedium">Footer</span>
                </div>
                <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4 ">
                  <Controller
                    name="registeredCompanyName"
                    control={control}
                    rules={{ required: "Registered company name is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Registered Company Name"
                        fullWidth
                        helperText={errors?.registeredCompanyName?.message}
                        error={!!errors.registeredCompanyName}
                      />
                    )}
                  />
                  <Controller
                    name="copyrightText"
                    control={control}
                    rules={{ required: "Copyright text is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        size="small"
                        label="Copyright Text"
                        fullWidth
                        helperText={errors?.copyrightText?.message}
                        error={!!errors.copyrightText}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Submit / Reset */}
            <div className="flex items-center justify-center gap-4">
              <PrimaryButton type="submit" title={"Submit"} />
              <SecondaryButton handleSubmit={handleReset} title={"Reset"} />
            </div>
          </form>

          {/* Hints for integrators */}
          <div className="mt-6 p-3 rounded-md bg-gray-50 text-xs text-textSecondary">
            <p className="mb-1">Files are sent as:</p>
            <ul className="list-disc ml-6">
              <li>
                <code>companyLogo</code> (single)
              </li>
              <li>
                <code>heroImages</code> (multiple)
              </li>
              <li>
                <code>gallery</code> (multiple)
              </li>
              <li>
                <code>productImages_0..n</code> (multiple per product)
              </li>
              <li>
                <code>testimonialImages_0..n</code> (single per testimonial)
              </li>
            </ul>
            <p className="mt-2">
              Arrays <code>products</code> and <code>testimonials</code> are
              JSON-stringified in the request body.
            </p>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default CreateWebsite;
