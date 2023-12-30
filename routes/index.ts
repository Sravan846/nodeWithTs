import express from "express";
import userRouter from "./user";
let mainRouter = express.Router();

mainRouter.use("/user", userRouter);

export default mainRouter;
