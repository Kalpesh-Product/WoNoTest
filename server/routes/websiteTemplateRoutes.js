const router = require("express").Router();
const upload = require("../config/multerConfig");

const {
  createTemplate,
  getTemplate,
} = require("../controllers/websiteControllers/websiteTemplateControllers");

router.post("/create-website", upload.any(), createTemplate);
// router.post(
//   "/create-template",
//   upload.fields([
//     { name: "companyLogo", maxCount: 1 },
//     { name: "heroImages", maxCount: 5 },
//     { name: "gallery", maxCount: 10 },
//     { name: "productImages", maxCount: 10 },
//     { name: "testimonialImages", maxCount: 20 },
//   ]),
//   createTemplate
// );

router.get("/get-template/:company", getTemplate);

module.exports = router;
