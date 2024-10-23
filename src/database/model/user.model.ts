import mongoose, { Schema, model } from 'mongoose';

// Define the TypeScript interface for the user
export interface IUser {
  fullName: string;
  bio: string;
  email: string;
  password?: string;
  phoneNumber?: string;
  location?: string;
  resumeUrl: string;
  profileImageUrl: string;
  backgroundImageUrl: string;
  skillTitle: string;
  aboutMe: string;
  socialLinks?: {
    githubUrl?: string;
    linkedinUrl?: string;
    twitterUrl?: string;
    personalWebsiteUrl?: string;
  };
}

// Define the Mongoose schema based on the IUser interface
const UserSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  bio: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phoneNumber: { type: String },
  location: { type: String },
  resumeUrl: { type: String, required: false },
  profileImageUrl: { type: String, required: false },
  backgroundImageUrl: { type: String, required: false },
  skillTitle: { type: String, required: false },
  aboutMe: { type: String, required: false },
  socialLinks: {
    githubUrl: { type: String },
    linkedinUrl: { type: String },
    twitterUrl: { type: String },
    personalWebsiteUrl: { type: String },
  },
});

// Create the Mongoose model


export const UserModel =  mongoose.models.User || model<IUser>("User", UserSchema);
