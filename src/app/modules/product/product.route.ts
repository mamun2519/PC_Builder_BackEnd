import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

router.get("/all", ProductController.getAllProduct);
router.get("/:id", ProductController.getSingleProduct);

export const ProductRoute = router;
