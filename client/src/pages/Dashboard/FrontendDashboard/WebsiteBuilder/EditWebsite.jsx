import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField, CircularProgress } from "@mui/material";
import PrimaryButton from "../../../../components/PrimaryButton";
import SecondaryButton from "../../../../components/SecondaryButton";
import { toast } from "sonner";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const EditWebsite = () => {
  const [isEditing, setIsEditing] = useState(false);
  const axios = useAxiosPrivate();
  const tenant  =  "biznest"
  const { data: websiteData, isLoading } = useQuery({
    queryKey: ["websiteData", tenant],
    queryFn: async () => {
      try {
        const response = await axios.get(`/api/editor/get-template/${tenant}`);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
  });

  
const { data, isPending, error } = useQuery({
  queryKey: ["company", tenant],          // or ["company","biznest"]
  queryFn: async () => {
    const res = await axios.get(`/api/editor/get-template/${tenant}`);
    return res.data;                       // template doc
  },
  enabled: !!tenant,
});

// 2) RHF setup
const { control, handleSubmit, reset, watch } = useForm({
  defaultValues: {
    companyName: "",
    title: "",
    subTitle: "",
    CTAButtonText: "",
    about: "",
    productTitle: "",
    galleryTitle: "",
    testimonialTitle: "",
    contactTitle: "",
    mapUrl: "",
    email: "",
    phone: "",
    address: "",
    registeredCompanyName: "",
    copyrightText: "",
    companyLogo: null,
    heroImages: [],
    gallery: [],
    products: [],
    testimonials: [],
  },
});

// 3) Map server template -> form shape and load everything at once
useEffect(() => {
  if (isPending || !data) return;

  const tpl = data; // your template doc from the API

  reset({
    companyName: tpl?.companyName ?? "",
    title: tpl?.title ?? "",
    subTitle: tpl?.subTitle ?? "",
    CTAButtonText: tpl?.CTAButtonText ?? "",
    about: tpl?.about ?? "",
    productTitle: tpl?.productTitle ?? "",
    galleryTitle: tpl?.galleryTitle ?? "",
    testimonialTitle: tpl?.testimonialTitle ?? "",
    contactTitle: tpl?.contactTitle ?? "",
    mapUrl: tpl?.mapUrl ?? "",
    email: tpl?.email ?? "",
    phone: tpl?.phone ?? "",
    address: tpl?.address ?? "",
    registeredCompanyName: tpl?.registeredCompanyName ?? "",
    copyrightText: tpl?.copyrightText ?? "",

    companyLogo: tpl?.companyLogo ?? null, // {id,url}
    heroImages: Array.isArray(tpl?.heroImages) ? tpl.heroImages : [],
    gallery: Array.isArray(tpl?.gallery) ? tpl.gallery : [],

    products: Array.isArray(tpl?.products)
      ? tpl.products.map((p) => ({
          type: p?.type ?? "",
          name: p?.name ?? "",
          cost: p?.cost ?? "",
          description: p?.description ?? "",
          images: Array.isArray(p?.images) ? p.images : [], // existing server images
          files: [], // slot for new uploads on edit
        }))
      : [],

    testimonials: Array.isArray(tpl?.testimonials)
      ? tpl.testimonials.map((t) => ({
          name: t?.name ?? "",
          jobPosition: t?.jobPosition ?? "",
          testimony: t?.testimony ?? "",
          rating: t?.rating ?? 5,
          image: t?.image ?? null, // existing server image {id,url}
          file: null,              // slot for new upload on edit
        }))
      : [],
  });
}, [isPending, data, reset]);

// 4) For read-only display, read from the form state (not a separate transform)
const values = watch();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onSubmit = (data) => {
    setIsEditing(!isEditing);
    toast.success("Website details updated successfully");
    // Add the API call to update website details here
  };

  const handleReset = () => {
    reset();
  };



 return (
  <div className="border-2 border-gray-200 p-4 rounded-md flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <div>
        <span className="text-subtitle font-pmedium text-primary">Edit Website</span>
      </div>
      {!isEditing ? (
        <div>
          <PrimaryButton handleSubmit={handleEditToggle} title={"Edit"} />
        </div>
      ) : (
        <div>
          <PrimaryButton handleSubmit={() => setIsEditing(false)} title={"Cancel"} />
        </div>
      )}
    </div>

    <div className="h-[51vh] overflow-y-auto">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              {/* Section: Basic Information */}
              <div className="py-4 border-b-default border-borderGray">
                <span className="text-subtitle font-pmedium">Basic Information</span>
              </div>

              <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4">
                {isLoading
                  ? []
                  : ["companyName", "title", "subTitle", "CTAButtonText"].map((fieldKey) => (
                      <div key={fieldKey}>
                        {isEditing ? (
                          <Controller
                            name={fieldKey}
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                size="small"
                                label={fieldKey
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase())}
                                fullWidth
                              />
                            )}
                          />
                        ) : (
                          <div className="py-2 flex justify-between items-center gap-2">
                            <div className="w-[100%] justify-start flex">
                              <span className="font-pmedium text-gray-600 text-content">
                                {fieldKey
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase())}
                              </span>{" "}
                            </div>
                            <div className="">
                              <span>:</span>
                            </div>
                            <div className="w-full">
                              <span className="text-gray-500">{values?.[fieldKey] ?? ""}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
              </div>
            </div>

            <div>
              {/* Section: About & Contact Information */}
              <div className="py-4 border-b-default border-borderGray">
                {/* <span className="text-subtitle font-pmedium">About & Contact</span> */}
                <span className="text-subtitle font-pmedium">Contact</span>
              </div>

              <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4">
                {isLoading
                  ? []
                  : ["contactTitle", "mapUrl", "email", "phone", "address"].map(
                      (fieldKey) => (
                        <div key={fieldKey}>
                          {isEditing ? (
                            <Controller
                              name={fieldKey}
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  size="small"
                                  label={fieldKey
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/^./, (str) => str.toUpperCase())}
                                  fullWidth
                                />
                              )}
                            />
                          ) : (
                            <div className="py-2 flex justify-between items-center gap-2">
                              <div className="w-[100%] justify-start flex">
                                <span className="font-pmedium text-gray-600 text-content">
                                  {fieldKey
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/^./, (str) => str.toUpperCase())}
                                </span>{" "}
                              </div>
                              <div className="">
                                <span>:</span>
                              </div>
                              <div className="w-full">
                                <span className="text-gray-500">{values?.[fieldKey] ?? ""}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    )}
              </div>
            </div>

            <div>
              {/* Section: Gallery & Products */}
              <div className="py-4 border-b-default border-borderGray">
                <span className="text-subtitle font-pmedium">Gallery & Products</span>
              </div>

              <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 gap-4 p-4">
                {isLoading
                  ? []
                  : ["productTitle", "galleryTitle"].map((fieldKey) => (
                      <div key={fieldKey}>
                        {isEditing ? (
                          <Controller
                            name={fieldKey}
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                size="small"
                                label={fieldKey
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase())}
                                fullWidth
                              />
                            )}
                          />
                        ) : (
                          <div className="py-2 flex justify-between items-center gap-2">
                            <div className="w-[100%] justify-start flex">
                              <span className="font-pmedium text-gray-600 text-content">
                                {fieldKey
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase())}
                              </span>{" "}
                            </div>
                            <div className="">
                              <span>:</span>
                            </div>
                            <div className="w-full">
                              <span className="text-gray-500">{values?.[fieldKey] ?? ""}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* Submit / Cancel Buttons */}
          {isEditing && (
            <div className="flex items-center justify-center gap-2 py-4">
              <PrimaryButton title={"Submit"} handleSubmit={handleSubmit(onSubmit)} />
              <SecondaryButton title={"Reset"} handleSubmit={handleReset} />
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
);

};

export default EditWebsite;
