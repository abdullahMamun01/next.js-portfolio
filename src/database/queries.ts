/* eslint-disable @typescript-eslint/no-explicit-any */
import { dbConnect } from "@/services/dbConnect";
import { ISkill, SkillModel } from "./model/skill.model";
import { IProject, ProjectModel } from "./model/project.model";
import { BlogModel, IBLog } from "./model/blog.model";
import JobExperianceModel, { IJobExperiance } from "./model/experiance.model";
import { IUser, UserModel } from "./model/user.model";
import { createToken } from "./utils";
const nonSelect = "-createdAt -updatedAt";
const allSkillFromDB = async () => {
  await dbConnect();
  const skills = await SkillModel.find().select(nonSelect).lean();
  return skills;
};

const allProjectFromDB = async () => {
  await dbConnect();
  const skill = await ProjectModel.find().select(nonSelect);
  return skill;
};

const allBlogFromDB = async () => {
  await dbConnect();
  const skill = await BlogModel.find().select(nonSelect);
  return skill;
};

const allJobExperianceFromDB = async () => {
  await dbConnect();
  const skill = await JobExperianceModel.find().select(nonSelect);
  return skill;
};

const skillSaveIntoDB = async (payload: ISkill) => {
  await dbConnect();
  const skill = await SkillModel.create(payload);
  return skill;
};

const projectSaveIntoDB = async (payload: IProject) => {
  await dbConnect();
  const project = await ProjectModel.create(payload);

  return project;
};

const blogSaveIntoDB = async (payload: IBLog) => {
  await dbConnect();
  const blog = await BlogModel.create(payload);
  return blog;
};

const jobExperianceSaveToDB = async (payload: IJobExperiance) => {
  await dbConnect();
  const blog = await JobExperianceModel.create(payload);
  return blog;
};

const signup = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  await dbConnect();
  const user = await UserModel.create(payload);
  return user;
};

const login = async (payload: { email: string; password: string }) => {
  await dbConnect()
  try {
    const user = await UserModel.findOne({ email: payload.email });
    if (!user) {
      throw new Error("account not found or created");
    }
    if (user.password != payload.password) {

      throw new Error("invalid credential");
    }
    const token = createToken({ name: user.name, email: user.email });
    return {
      data: token,
      message: "user login successfully",
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

const deleteSkillFromDB = async (id: string) => {
  await dbConnect()
  const deleteSkill = await SkillModel.findByIdAndDelete(id);
  return deleteSkill;
};




const singleProject = async (id: string) => {
  await dbConnect()
  const project = await ProjectModel.findById(id);
  return project;
};

const deleteProjectromDB = async (id: string) => {
  await dbConnect();
  const deleteProject = await ProjectModel.findByIdAndDelete(id);
  return deleteProject;
};

const deleteBlogFromDB = async (id: string) => {
  const deleteProject = await BlogModel.findByIdAndDelete(id);
  return deleteProject;
};

const getUser = async () => {
  await dbConnect();
  const user = await UserModel.findOne({
    email: "abdullah.mamun.0110@gmail.com",
  });

  return user;
};

const updateBio = async (email: string, payload: Partial<IUser>) => {
  await dbConnect();
  const update = await UserModel.findOneAndUpdate({ email }, payload, {
    new: true,
    runValidators: true,
  });
  return update;
};

export {
  skillSaveIntoDB,
  projectSaveIntoDB,
  blogSaveIntoDB,
  jobExperianceSaveToDB,
  allSkillFromDB,
  allProjectFromDB,
  allBlogFromDB,
  allJobExperianceFromDB,
  signup,
  login,
  deleteSkillFromDB,
  deleteProjectromDB,
  deleteBlogFromDB,
  singleProject,
  updateBio,
  getUser,
};
