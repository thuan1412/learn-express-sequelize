const express = require("express");
const bodyParser = require("body-parser");
const { connect, sequelize } = require("./sequelize");

const productRouter = require('./products/routes')

const PORT = process.env.PORT || 4321;

(async () => {
  try {
    await connect();

    const app = express();

    console.log(productRouter);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/products', productRouter)

    const products = await sequelize.models['products'].findAll();
    console.log(products);
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
