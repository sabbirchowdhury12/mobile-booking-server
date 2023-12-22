import { Schema, model } from "mongoose";
import { IMobile } from "./mobile.interface";

const mobileSchema = new Schema<IMobile>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  os: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Mobile = model<IMobile>("Mobile", mobileSchema);

export default Mobile;
