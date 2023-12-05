const mongoose = require("mongoose");

const WCAG = mongoose.model("Critere_WCAG", {
  category: {
    // ex : 2.1.1
    theme: Number, // ex: 1 = OPERABLE (add a REGEX)
    sub_category: String, // ex: Keyboard Accessible
  },
  title: String, // ex: Keyboard
  level: Number, // A
  version: Number, // WCAG 2.0
  description: String,
  critere_complementary: String, // criteria 2.1.2 (A) and 2.1.3 (AAA).
  RGAA: {
    _id: String,
    theme: String, // Navigation
    ref: String, //
  },
});

// Export du modèle
module.exports = WCAG;
