const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  //hero
  templateName: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  CTAButtonText: { type: String, required: true },
  //about
  about: { type: String, required: true },
});

const WebsiteTemplate = mongoose.model("WebsiteTemplate", templateSchema);
module.exports = WebsiteTemplate;
