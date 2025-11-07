import { Schema, model, models } from "mongoose";

const QuoteSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: String, required: true },
    isDraft: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const Quote = models.Quote || model("Quote", QuoteSchema);
