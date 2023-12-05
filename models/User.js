const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: {
    first_name: String,
    last_name: String,
    required: Boolean,
  },
  password: String,
  job: String,
  company: String,
});

// Export du modèle
module.exports = User;
