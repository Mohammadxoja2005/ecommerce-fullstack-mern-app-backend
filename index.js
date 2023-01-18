// packages
const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

// routes import
const product = require("./routes/product");
const user = require("./routes/user");
const phone = require("./routes/contact");
const basket = require("./routes/basket");
const order = require("./routes/order");
const preorder = require("./routes/preorder");
const image = require("./routes/image");
const operations = require("./routes/operations");

//middlewares 
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("server started...");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.use("/product", product);
app.use("/user", user);
app.use("/contact", phone);
app.use("/basket", basket);
app.use("/order", order);
app.use("/preorder", preorder);
app.use("/image", image); 
app.use("/operations", operations);

// main
app.get("/", async (req, res) => {
  res.json("hello world");
});
