const router = require("express").Router();
const {
  createTemplates,
  getTemplates,
} = require("../controllers/websiteControllers/websiteTemplateControllers");

router.post("/create-template", createTemplates);
router.get("/get-templates", getTemplates);

module.exports = router;
