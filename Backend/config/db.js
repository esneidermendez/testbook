const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  const conect = () => {
    mongoose.connect(
        process.env.MONGODB,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log("DB: error", err);
        } else {
          console.log("DB: Conexión correcta");
        }
      }
    );
  };
  conect();
};
