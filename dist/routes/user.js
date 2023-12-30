"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controllers/user"));
let userRouter = express_1.default.Router();
userRouter.post("/add", user_1.default.newUser);
userRouter.get("/getAll", user_1.default.getAlluser);
userRouter.get("/get/:id", user_1.default.getbyId);
userRouter.post("/update/:id", user_1.default.updateByid);
userRouter.delete("/delete/:id", user_1.default.deleteByid);
exports.default = userRouter;
