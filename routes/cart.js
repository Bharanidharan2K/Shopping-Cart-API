import express from "express";

import { getCart,createCart } from "../controllers/cart.js";

const router = express.Router(); 

router.get('/', getCart);

router.post('/', createCart);

export default router;