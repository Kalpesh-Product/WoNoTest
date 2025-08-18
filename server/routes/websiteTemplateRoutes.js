const router = require("express").Router();
const upload = require("../config/multerConfig");

const {
  createTemplate,
  getTemplate,
} = require("../controllers/websiteControllers/websiteTemplateControllers");

router.post(
  "/create-template",
  upload.fields([
    { name: "heroImages", maxCount: 5 },
    { name: "gallery", maxCount: 10 },
    { name: "productImages", maxCount: 10 },
    { name: "testimonialImages", maxCount: 10 },
  ]),
  createTemplate
);

router.get("/get-template/:company", getTemplate);

module.exports = router;
