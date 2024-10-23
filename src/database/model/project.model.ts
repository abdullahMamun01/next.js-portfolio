import mongoose, { Schema, model } from "mongoose";

export interface IProject {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubClient?: string;
  githubBackend: string;
  imageUrl?: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String, required: true }],
    liveUrl: { type: String },
    githubClient: { type: String },
    githubBackend: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const ProjectModel =  mongoose.models.Project ||  model<IProject>("Project", ProjectSchema);
