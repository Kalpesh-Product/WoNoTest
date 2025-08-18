const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  //hero
  templateName: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  CTAButtonText: { type: String, required: true },
  heroImages: [
    {
      id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  //about
  about: { type: String, required: true },
  //products
  productTitle: { type: String, required: true },
  products: [
    {
      name: { type: String, required: true },
      subtitle: { type: String, required: true },
      cost: { type: String, required: true },
      description: { type: String, required: true },
      image: {
        id: { type: String, required: true },
        url: { type: String, required: true },
      },

      // productForm???
    },
  ],
});

const WebsiteTemplate = mongoose.model("WebsiteTemplate", templateSchema);
module.exports = WebsiteTemplate;
