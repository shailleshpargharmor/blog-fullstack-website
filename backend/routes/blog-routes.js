import express from 'express';
import { addBlogs, delBlogs, getAllBlogs, getByID, getByUserId, updateBlogs } from '../controllers/blog-controller.js';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/add', addBlogs);
blogRouter.put('/update/:id', updateBlogs);
blogRouter.get("/:id", getByID);
blogRouter.delete("/:id", delBlogs);
blogRouter.get("/user/:id", getByUserId)

export default blogRouter;