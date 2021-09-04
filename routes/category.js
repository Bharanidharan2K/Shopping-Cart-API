import express from "express";

import { getCategory } from "../controllers/category.js";


const router = express.Router(); 

router.get('/', getCategory);

export default router;