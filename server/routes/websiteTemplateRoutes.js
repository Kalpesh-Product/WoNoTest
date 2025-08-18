const router = require("express").Router();
const {
  createTemplates,
  getTemplate,
} = require("../controllers/websiteControllers/websiteTemplateControllers");

router.post("/create-template", createTemplates);
router.get("/get-template/:company", getTemplate);

module.exports = router;
