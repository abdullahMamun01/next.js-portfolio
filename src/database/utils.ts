/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt from 'jsonwebtoken';

const SECRET_KEY =  'your-secret-key'; // Store this in environment variables

// Function to create a JWT token
export const createToken = (payload: object, expiresIn: string = '1h') => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

// Function to verify a JWT token
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error:unknown) {
    return null;
  }
};
