const WebsiteTemplate = require("../../models/website/WebsiteTemplate");

const createTemplates = async (req, res) => {
  try {
    const template = new WebsiteTemplate(req.body);
    await template.save();
    res.status(201).json({ message: "Template created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTemplates = async (req, res) => {
  try {
    const templates = await WebsiteTemplate.find();
    console.log("get-template");
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTemplates,
  getTemplates,
};
