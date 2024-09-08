import { PRODUCTS } from "../products.js";
const products = PRODUCTS;

export const CreateProductInputValidation = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(411).json("Wrong Input Data");
  }
  const product = {
    id: products.length + 1,
    name,
    price,
  };
  req.product = product;
  next();
};
