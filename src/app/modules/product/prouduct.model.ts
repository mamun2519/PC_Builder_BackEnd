import { Schema, model } from "mongoose";
import { IProduct, ProductModel } from "./product.interface";

const productSchema = new Schema<IProduct>({
  image: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  averageRating: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  keyFeatures: {
    model: {
      type: String,
      required: true,
    },
    speed: {
      type: String,
      required: true,
    },
    port: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    resolution: {
      type: String,
      required: true,
    },
    warranty: {
      type: String,
      required: true,
    },
  },
  review: [],
});

export const Product = model<IProduct, ProductModel>("Product", productSchema);
