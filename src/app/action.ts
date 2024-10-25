/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IBLog } from "@/database/model/blog.model";
import { IJobExperiance } from "@/database/model/experiance.model";
import { IProject } from "@/database/model/project.model";
import { ISkill } from "@/database/model/skill.model";
import { IUser } from "@/database/model/user.model";
import {
  blogSaveIntoDB,
  deleteBlogFromDB,
  deleteProjectromDB,
  deleteSkillFromDB,
  jobExperianceSaveToDB,
  login,
  projectSaveIntoDB,
  signup,
  skillSaveIntoDB,
  updateBio,

} from "@/database/queries";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const skillAction = async (payload: ISkill) => {

  try {
    await skillSaveIntoDB(payload);
    revalidatePath('/')
  } catch (error: unknown) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export const projectAction = async (payload: IProject) => {
  try {
    await projectSaveIntoDB(payload);
  } catch (error: unknown) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export const blogAction = async (payload: IBLog) => {
  try {
    await blogSaveIntoDB(payload);
  } catch (error: unknown) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export const jobExperianceAction = async (payload: IJobExperiance) => {
  try {
    await jobExperianceSaveToDB(payload);
  } catch (error: unknown) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export const signUpAction = async () => {
  await signup({
    name: "Abdullah Mamun",
    email: "abdullah.mamun.0110@gmail.com",
    password: "full-stack-portfolio-123",
  });
};

export const loginAction = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const user = await login(payload);
    cookies().set("portfolio-accesstoken", user.data, {
      maxAge: 60 * 60 * 24 * 7,
    });

    return {
      success: true,
      status: 200,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUserAction = async (payload: Partial<IUser>) => {
  try {
    const email = "abdullah.mamun.0110@gmail.com";
    const updateUser = await updateBio(email, payload);

    return updateUser;
  } catch (error: any) {

    throw new Error(error.message);
  }
};

export const deleteSkillAction = async (id: string) => {
  const deleteSkill = await deleteSkillFromDB(id);
  revalidatePath("/")
  return deleteSkill;
};

export const deleteProjectAction = async (id: string) => {
  const deleteProject = await deleteProjectromDB(id);
  return deleteProject;
};

export const deleteBlogAction = async (id: string) => {
  const deleteProject = await deleteBlogFromDB(id);
  return deleteProject;
};
