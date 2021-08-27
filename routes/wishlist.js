import express from "express";

import { createWishlist, getWishlist, deleteWishlist } from "../controllers/wishlist.js";


const router = express.Router(); 

router.get('/', getWishlist);

router.post('/', createWishlist);

router.delete('/:id', deleteWishlist);


export default router;