require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport")

const { connect } = require("./sequelize");
const productRouter = require("./products/routes");
const authRouter = require("./auth/routes");

const PORT = process.env.PORT || 4321;

(async () => {
  try {
    await connect();
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use("/products", productRouter);
    app.use("", authRouter);

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
