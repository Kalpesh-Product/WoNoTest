const WebsiteTemplate = require("../../models/website/WebsiteTemplate");

const createTemplates = async (req, res) => {
  try {
    const formatCompany = (name) => {
      if (!name) return "";

      return name
        .toLowerCase() // lowercase everything
        .split("-")[0] // take only the part before the first dash
        .replace(/\s+/g, ""); // strip all spaces
    };
    const searchKey = formatCompany(req.body.companyName);

    const templateObj = { ...req.body, searchKey };
    const template = new WebsiteTemplate(templateObj);

    await template.save();
    res.status(201).json({ message: "Template created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTemplate = async (req, res) => {
  try {
    const { company } = req.params;
    // const host = req.hostname;
    // const subdomain = host.split(".")[0].toLowerCase();
    const templates = await WebsiteTemplate.findOne({
      searchKey: company,
    });

    console.log("get-template");
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTemplates,
  getTemplate,
};
