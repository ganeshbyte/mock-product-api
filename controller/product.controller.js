import { PRODUCTS } from "../products.js";
const products = PRODUCTS;

const getAllProducts = (req, res) => {
  res.json([...products]);
};

const createProduct = (req, res) => {
  try {
    products.push(req.product);
    res
      .status(200)
      .json(mapToResponse(req.product, "Product Added Successfully"));
  } catch (error) {
    return res.status(500).json(mapToResponse("Internal Server Error"));
  }
};

const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);

  const { name, price } = req.body;

  if (!name || !price) {
    return res
      .status(400)
      .json(mapToResponse(null, "No data provided to update"));
  }

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) {
    return res.status(404).json(mapToResponse(null, "Product not found"));
  }

  const existingProduct = products[productIndex];

  const updatedProduct = {
    ...existingProduct,
    ...(name && { name }),
    ...(price && { price }),
  };

  products.splice(productIndex, 1, updatedProduct);

  try {
    res
      .status(200)
      .json(mapToResponse(updatedProduct, "Product Updated Successfully"));
  } catch (error) {
    res.status(500).json(mapToResponse(null, "Internal Server Error"));
  }
};

const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) {
    return res.status(404).json(mapToResponse(null, "Product not found"));
  }

  const product = products.splice(productIndex, 1);

  try {
    res.status(200).json(mapToResponse(product, "Product Delete Successfully"));
  } catch (error) {
    return res.status(500).json(mapToResponse("Internal Server Error"));
  }
};

function mapToResponse(data, message) {
  if (!data) {
    return { message: message };
  }
  return {
    data: [data],
    message: message,
  };
}

export { createProduct, getAllProducts, updateProduct, deleteProduct };
