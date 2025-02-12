import express from "express";
import { login, register, userCredits } from "../controllers/userControllers.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/credits",userAuth ,userCredits);

export default userRouter;
