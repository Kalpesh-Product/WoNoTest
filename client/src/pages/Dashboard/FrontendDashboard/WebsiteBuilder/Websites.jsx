import React from "react";
import BiznestImage from "../../../../assets/WONO_images/img/products-images/biznestImage.png";
import BiznestImageMockup from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/biznest-mockup.webp";
import Cafe_2 from "../../../../assets/WONO_images/img/website-builder/new-layout/cafe-2.webp";
import Cafe2Mockup from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/cafe-mockup-2.png";
import Cafe_3 from "../../../../assets/WONO_images/img/website-builder/new-layout/cafe-3.webp";
import Cafe3Mockup from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/cafe-mockup-3.png";
import CoWorkingImage from "../../../../assets/WONO_images/img/website-builder/new-layout/co-working.webp";
import CoWorkingImageMockup from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-working-mockup-bg.webp";
import CoLivingImage from "../../../../assets/WONO_images/img/website-builder/new-layout/co-living.webp";
import CoLivingImageMockup from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-living-mockup.webp";
import CoWorkingImage_2 from "../../../../assets/WONO_images/img/website-builder/new-layout/co-working-2.webp";
import CoWorkingNomad from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-living-nomad.png";
import CoWorkingImage_3 from "../../../../assets/WONO_images/img/website-builder/new-layout/co-working-3.webp";
import CoWorkingImage_3_Mockup from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-working-3.png";
import Featured from "../../../../assets/WONO_images/img/website-builder/new-layout/featured/featured-1.png";
import Boutique from "../../../../assets/WONO_images/img/website-builder/new-layout/boutique.webp";
import BoutiqueMockup from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/boutique-mockup.webp";
import CoWorkingMewo from "../../../../assets/WONO_images/img/website-builder/new-layout/co-working-mewo.webp";
import CoWorkingMewoMockup from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-working-mewo-mockup.webp";
import BizNestMockup from "../../../../assets/WONO_images/img/website-builder/new-layout/Macbook-mockup.webp";
import Hostels from "../../../../assets/WONO_images/img/website-builder/new-layout/hostels.png";
import Hostels_mockup from "../../../../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/hostels.png";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { CircularProgress, Skeleton } from "@mui/material";

const Websites = () => {
  const navigate = useNavigate();
  const axios = useAxiosPrivate();

  const fetchTemplates = async () => {
    try {
      const response = await axios.get("/api/editor/get-templates");
      return response.data;
    } catch (error) {
      console.error("Error fetching templates:", error);
    }
  };

  const { data: templates = [], isPending: isTemplatesPending } = useQuery({
    queryKey: ["templates"],
    queryFn: fetchTemplates,
  });

  const themeImages = [
    {
      src: CoWorkingMewo,
      mockup: CoWorkingMewoMockup,
      alt: "CoWorkingMewo",
      tag: "co-working",
    },
    {
      src: CoWorkingImage,
      mockup: CoWorkingImageMockup,
      alt: "Co-Working Image",
      tag: "co-working",
    },
    {
      src: Boutique,
      mockup: BoutiqueMockup,
      alt: "Boutique Image",
      tag: "boutique",
    },
    {
      src: CoLivingImage,
      mockup: CoLivingImageMockup,
      alt: "Co-Living Image",
      tag: "co-living",
    },
    {
      src: CoWorkingImage_2,
      mockup: CoWorkingNomad,
      alt: "CoLivingImage_2",
      tag: "co-working",
    },
    {
      src: CoWorkingImage_3,
      mockup: CoWorkingImage_3_Mockup,
      alt: "CoLivingImage_3",
      tag: "co-working",
    },
    { src: Cafe_2, mockup: Cafe2Mockup, alt: "Cafe_2", tag: "cafe" },
    { src: Cafe_3, mockup: Cafe3Mockup, alt: "Cafe_3", tag: "cafe" },
    { src: Hostels, mockup: Hostels_mockup, alt: "Hostels", tag: "hostels" },
  ];

  return (
    <div>
      <div className="p-4 flex flex-col gap-4">
        <div className="themePage-content-header bg-white flex flex-col gap-4">
          <h4 className="text-4xl text-left">Websites</h4>
          <hr />
        </div>

        {!isTemplatesPending ? (
          <div className="grid grid-cols-2 sm:grid-cols1 gap-6">
            {templates.map((template, index) => (
              <div key={template._id}>
                <div
                  className="theme-grid w-full h-full overflow-hidden shadow-lg rounded-xl"
                  key={index}
                  onClick={() =>
                    navigate(`/app/dashboard/frontend-dashboard/websites/${template.companyName}`, {
                      state: { website: template,isLoading:isTemplatesPending },
                      
                    })
                  }
                >
                  <img
                    src={template?.heroImages[0]?.url}
                    alt={template.companyName}
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-110 cursor-pointer"
                  />
                </div>
              </div>
            ))}
            {/* {themeImages.map((image, index) => (
              <div
                className="theme-grid w-full h-full overflow-hidden shadow-lg rounded-xl"
                key={index}
                onClick={() => {
                  navigate("/app/dashboard/frontend-dashboard/view-theme", {
                    state: { image },
                  }); // Pass theme data
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-200 hover:scale-110 cursor-pointer"
                />
              </div>
            ))} */}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols2 gap-2">
            <Skeleton variant="rectangular" width="100%" height={300} />
            <Skeleton variant="rectangular" width="100%" height={300} />
            <Skeleton variant="rectangular" width="100%" height={300} />
            <Skeleton variant="rectangular" width="100%" height={300} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Websites;
