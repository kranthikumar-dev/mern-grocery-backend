const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const path = require("path")
const adminRoutes = require("./routes/adminRoutes")
const emailRoutes = require("./routes/emailRoutes")
const cartRoutes = require("./routes/cartRoutes")

const app = express();
dotEnv.config();

console.log("checking", process.env.MONGO_URI);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use("/api", productRoutes);
app.use("/admin", adminRoutes)
app.use("/email", emailRoutes)
app.use("/cart", cartRoutes)

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running @${PORT}`);
});
