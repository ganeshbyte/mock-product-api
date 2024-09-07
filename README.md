# Node.js Project

## Overview

This is a simple mock API for managing products, built with Express.js. It provides endpoints for creating, retrieving, updating, and deleting products. Ideal for testing and development purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager, included with Node.js)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ganeshbyte/mock-product-api.git
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run the Project**

   ```bash
   node index.js
   ```

## Access the API

You can make requests to the following endpoints using tools like `curl` or Postman:

- **GET** `/api/products` - Retrieve a list of products
- **POST** `/api/products` - Create a new product
- **PUT** `/api/products/:id` - Update an existing product by ID
- **PATCH** `/api/products/:id` - Update an existing product by ID
- **DELETE** `/api/products/:id` - Delete a product by ID

### Example Requests

- **Get All Products:**

  ```http
  GET http://localhost:3000/api/products
  ```

- **Create Product:**

  ```
  POST http://localhost:3000/api/products
  ```

  **Update Product Using Id:**

  ```
  PUT http://localhost:3000/api/products/:id
  ```

  **Update Product Using Id:**

  ```
  PATCH http://localhost:3000/api/products/:id
  ```

  **Delete Product Using Id:**

  ```
  DELETE htpp://localhost:3000/api/products/:id
  ```
