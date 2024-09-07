import { PRODUCTS } from "../products.js";
const products = PRODUCTS;

const getAllProducts = (req, res) => {
  res.json([...products]);
};

const createProduct = (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(411).json("Wrong Input Data");
    }
    const product = {
      id: products.length + 1,
      name,
      price,
    };
    products.push(product);

    res.status(200).json(mapToResponse(product, "Product Added Successfully"));
  } catch (error) {
    return res.status(500).json(mapToResponse("Internal Server Error"));
  }
};

const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  console.log(productId);
  const { name, price } = req.body;

  // Validate input data
  if (!name || !price) {
    return res
      .status(400)
      .json(mapToResponse(null, "No data provided to update"));
  }

  // Find product index
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  // If product not found
  if (productIndex === -1) {
    return res.status(404).json(mapToResponse(null, "Product not found"));
  }

  // Get the current product details
  const existingProduct = products[productIndex];

  // Create the updated product with provided data, keeping other fields intact
  const updatedProduct = {
    ...existingProduct,
    ...(name && { name }), // update name if provided
    ...(price && { price }), // update price if provided
  };

  // Use splice to update the product in place
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
