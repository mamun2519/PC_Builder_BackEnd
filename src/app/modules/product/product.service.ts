import { SortOrder } from "mongoose";
import { PaginationHelper } from "../../../helper/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { productSearchFiled } from "./product.constant";
import { IProduct, IProductFilters } from "./product.interface";
import { Product } from "./prouduct.model";

const getProductFromDB = async (
  filters: IProductFilters,
  paginationOption: IPaginationOptions
): Promise<IGenericResponse<IProduct[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHelper.calculatePagination(paginationOption);
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  // Searching
  if (searchTerm) {
    andConditions.push({
      $or: productSearchFiled.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  // FILTERING
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filters).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // Sorting
  const sortCondition: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  // where conditions
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await Product.find(whereConditions)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
  const total = await Product.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleFromDB = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  return result;
};

export const ProductService = {
  getProductFromDB,
  getSingleFromDB,
};
