import express from "express";
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "./controller/product.controller.js";

const app = express();

// app.use(bodyParser.json());
app.use(express.json());

const PORT = 3000;

//healthz
app.get("/healthz", (req, res) => {
  res.send("Server Heart is Running...");
});

app.get("/api/products", getAllProducts);
app.post("/api/products", createProduct);
app.put("/api/products/:id", updateProduct);
app.delete("/api/products/:id", deleteProduct);

app.listen(PORT, () => {
  console.log("Server is Started At port number 3000");
});
