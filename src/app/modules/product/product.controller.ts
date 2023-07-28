import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import { productFilterEableFiled } from "./product.constant";
import { paginationFields } from "../../../constains/pagination";
import sendResponse from "../../../shared/response";
import { IProduct } from "./product.interface";
import { ProductService } from "./product.service";

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  console.log("hello");
  const filters: any = pick(req.query, productFilterEableFiled);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await ProductService.getProductFromDB(
    filters,
    paginationOptions
  );
  sendResponse<IProduct[]>(res, {
    statusCode: 200,
    success: true,
    message: "Product get Successfully!",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.getSingleFromDB(id);
  sendResponse<IProduct>(res, {
    statusCode: 200,
    success: true,
    message: "Semester get Successfully!",
    data: result,
  });
});

export const ProductController = {
  getAllProduct,
  getSingleProduct,
};
