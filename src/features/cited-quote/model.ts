import { Schema, model, models } from "mongoose";

const CitedQuoteSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: String, required: true },
    email: { type: String, required: true },
    citation: { type: String },
  },
  {
    timestamps: true,
  }
);

export const CitedQuote =
  models.CitedQuote || model("CitedQuote", CitedQuoteSchema);
