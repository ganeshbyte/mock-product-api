import express from "express";
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "./controller/product.controller.js";
import { CreateProductInputValidation } from "./middleware/product.middleware.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
const app = express();

// app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 3000;

//healthz
app.get("/healthz", (req, res) => {
  res.send("Server Heart is Running...");
});

app.get("/api/products", authMiddleware, getAllProducts);
app.post(
  "/api/products",
  authMiddleware,
  CreateProductInputValidation,
  createProduct
);
app.put("/api/products/:id", authMiddleware, updateProduct);
app.delete("/api/products/:id", authMiddleware, deleteProduct);

app.listen(PORT, () => {
  console.log("Server is Started At port number 3000");
});
