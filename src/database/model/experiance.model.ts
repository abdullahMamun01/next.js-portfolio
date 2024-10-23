import mongoose, { Schema, model } from 'mongoose';

// Define the interface for the Job document without extending Document
export interface IJobExperiance {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  employmentType: string;
  experienceGain: string;
}

// Create a schema for the Job model
const JobSchema = new Schema<IJobExperiance>({
  position: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    enum: ['Full Time', 'Part Time', 'Contract', 'Internship'], // Enum for employment types
    required: true,
  },
  experienceGain: {
    type: String,
    required: true, // If you want to make it required
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
  versionKey:false 
});

// Create the Job model
const JobExperianceModel =  mongoose.models.JobExperiance ||  model<IJobExperiance>('JobExperiance', JobSchema);

export default JobExperianceModel;
