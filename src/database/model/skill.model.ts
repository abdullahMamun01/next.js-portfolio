import mongoose, { Schema, model } from "mongoose";

export interface ISkill {
  skill: string;
  icon: string;
}

const SkillSchema = new Schema<ISkill>(
  {
    skill: { type: String, required: true },
    icon: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const SkillModel = mongoose.models.Skill || model<ISkill>("Skill", SkillSchema);
