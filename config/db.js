const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern-chat", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected !");
  } catch (err) {
    console.log(err.message);
  }
};
