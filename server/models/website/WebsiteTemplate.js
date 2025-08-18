const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  searchKey: { type: String, required: true },
  //hero
  companyName: { type: String, required: true },
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
  //   productTitle: { type: String, required: true },
  products: [
    {
      //   name: { type: String, required: true },
      //   subtitle: { type: String, required: true },
      //   cost: { type: String, required: true },
      //   description: { type: String, required: true },
      image: {
        id: { type: String, required: true },
        url: { type: String, required: true },
      },
    },
  ],
  gallery: [
    {
      id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  //   //testimonials
  //   testimonialTitle: { type: String, required: true },
  testimonials: [
    {
      image: {
        id: { type: String, required: true },
        url: { type: String, required: true },
      },
      //   name: { type: String, required: true },
      //   jobPosition: { type: String, required: true },
      //   testimony: { type: String, required: true },
      //   rating: { type: Number, required: true },
    },
  ],
  //   //contact
  //   contactTitle: { type: String, required: true },
  //   mapUrl: { type: String, required: true },
  //   email: { type: String, required: true },
  //   phone: { type: String, required: true },
  //   address: { type: String, required: true },
  //   //footer
  //   registeredCompanyName: { type: String, required: true },
  //   copyrightText: { type: String, required: true },
});

const WebsiteTemplate = mongoose.model("WebsiteTemplate", templateSchema);
module.exports = WebsiteTemplate;
