import { Router } from "express";
import { addProduct, getAllProducts, filterProducts, getSingleProduct, yourProducts, updateProduct, deleteProduct } from './../Controllers/Product.controller.js';
import { checkUserId } from "../Middlewares/AllMiddlewares.js";

const router = Router();
//api
router.post('/filter-products', filterProducts)
router.post('/add-product', addProduct)
router.get('/get-all-product', getAllProducts)
router.get('/get-single-product', getSingleProduct)
router.post('/your-products', yourProducts)
router.post('/update-product', updateProduct)
router.delete('/delete-product', deleteProduct)

export default router;
// import { Router } from "express";

// const router=Router();

// export default router;