import express from "express";
import * as dotenv from "dotenv";
import { v2 as clourdinary } from "cloudinary";
import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

export default router;
