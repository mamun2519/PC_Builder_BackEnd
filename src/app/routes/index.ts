import express from "express";
import { ProductRoute } from "../modules/product/product.route";
const router = express.Router();
const moduleRoute = [
  {
    path: "product",
    route: ProductRoute,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
