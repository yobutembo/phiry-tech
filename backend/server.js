import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import products from "./data/products.js";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";
dotenv.config();
const port = process.env.PORT || 5000;
connectDB(); //Connect to MongoDB
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", async (req, res) => {
  try {
    const response = await Product.find({});
    const products = response;
    res.json(products);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
