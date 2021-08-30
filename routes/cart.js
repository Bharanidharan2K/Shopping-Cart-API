import express from "express";

import { getCart,createCart, deleteCart } from "../controllers/cart.js";

const router = express.Router(); 

router.get('/', getCart);

router.post('/', createCart);

router.delete('/:id', deleteCart);

export default router;