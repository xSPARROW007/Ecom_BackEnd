import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getSingleProduct, getlatestProducts, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const app = express.Router();
//To create new product - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);
//To get all products with filter - /api/v1/product/latest
app.get("/all", getAllProducts);
//To get latest product - /api/v1/product/latest
app.get("/latest", getlatestProducts);
//To get all unique categories - /api/v1/product/categories
app.get("/categories", getAllCategories);
//To get all product - /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);
app
    .route("/:id")
    .get(getSingleProduct)
    .put(adminOnly, singleUpload, updateProduct)
    .delete(adminOnly, deleteProduct);
export default app;
