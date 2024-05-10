import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      require: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

export const Book = mongoose.model("Cat", bookSchema);
