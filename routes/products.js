import express from "express";

import { getProduct } from "../controllers/products.js";


const router = express.Router(); 

router.get('/', getProduct);


export default router;