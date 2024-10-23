import mongoose, { Schema, model } from "mongoose";

export interface IBLog {
  title: string;
  description: string;
  blogUrl: string ,
  imageUrl?: string;
}

const BlogSchema = new Schema<IBLog>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    blogUrl: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const BlogModel = mongoose.models.Blog ||  model<IBLog>("Blog", BlogSchema);
