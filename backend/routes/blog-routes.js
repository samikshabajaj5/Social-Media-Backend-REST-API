import express from "express";
const blogRouter = express.Router();
import { getAllBlogs } from "../controllers/blog-controller";
import { addBlog } from "../controllers/blog-controller";
blogRouter.get("/", getAllBlogs);
blogRouter.post("/add",addBlog);

export default blogRouter;