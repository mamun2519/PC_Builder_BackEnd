import { Model } from "mongoose";

export type IProduct = {
  _id: string;
  image: string;
  productName: string;
  category: string;
  price: string;
  status: string;
  rating: string;
  description: string;
  averageRating: string;
  brand: string;
  keyFeatures: {
    model: string;
    speed: string;
    port: string;
    type: string;
    resolution: string;
    warranty: string;
  };
  review: [];
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
