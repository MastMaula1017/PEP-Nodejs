import express from "express";
import  {hello}  from "../controllers/user.controller.js"

const userRouter = express.Router();


userRouter.get("/",hello);

export default userRouter;