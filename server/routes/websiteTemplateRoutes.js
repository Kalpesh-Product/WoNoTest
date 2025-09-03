const router = require("express").Router();
const upload = require("../config/multerConfig");

const {
  createTemplate,
  getTemplate,
  editTemplate,
  getTemplates,
  getInActiveTemplates,
  activateTemplate,
  getInActiveTemplate,
} = require("../controllers/websiteControllers/websiteTemplateControllers");

router.post("/create-website", upload.any(), createTemplate);
router.patch("/edit-website", upload.any(), editTemplate);
router.patch("/activate-website", activateTemplate);
router.get("/get-template/:company", getTemplate);
router.get("/get-templates", getTemplates);
router.get("/get-inactive-template", getInActiveTemplate);
router.get("/get-inactive-templates", getInActiveTemplates);

module.exports = router;
