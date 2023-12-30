import express from "express";
import userCtrl from "../controllers/user";
let userRouter = express.Router();

userRouter.post("/add", userCtrl.newUser);
userRouter.get("/getAll", userCtrl.getAlluser);
userRouter.get("/get/:id", userCtrl.getbyId);
userRouter.post("/update/:id", userCtrl.updateByid);
userRouter.delete("/delete/:id", userCtrl.deleteByid);


export default userRouter;
