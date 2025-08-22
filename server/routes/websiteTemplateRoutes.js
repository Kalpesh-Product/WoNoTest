const router = require("express").Router();
const upload = require("../config/multerConfig");

const {
  createTemplate,
  getTemplate,
  editTemplate,
  getTemplates,
} = require("../controllers/websiteControllers/websiteTemplateControllers");

router.post("/create-website", upload.any(), createTemplate);
router.patch("/edit-website", upload.any(), editTemplate);
router.get("/get-template/:company", getTemplate);
router.get("/get-templates", getTemplates);

module.exports = router;
