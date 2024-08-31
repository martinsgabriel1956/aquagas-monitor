import { GoogleAIFileManager } from '@google/generative-ai/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from '../utils/env.js';

export const fileManager = new GoogleAIFileManager(env.GEMINI_API_KEY);
const genAi = new GoogleGenerativeAI(env.GEMINI_API_KEY);

export const model = genAi.getGenerativeModel({
  model: "gemini-1.5-pro"
})

