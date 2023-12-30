import user from "../model/user";
import { Request, Response } from "express";

export default {
  newUser: async (reqp: Request, resp: Response) => {
    const { name, email, password }: any = reqp.body;
    await user.create({ name, email, password });
    resp.json({ message: "user is added" });
  },
  getAlluser: async (reqp: Request, resp: Response) => {
    var result = await user.find();
    resp.json({ message: "list of user", result });
  },
  getbyId: async (reqp: Request, resp: Response) => {
    const { id }: any = reqp.params;
    var result = await user.findById(id);
    resp.json({ message: "get user by id ", result });
  },
  updateByid: async (reqp: Request, resp: Response) => {
    const { id }: any = reqp.params;
    const { name, email, password }: any = reqp.body;
    var result = await user.findByIdAndUpdate(id, { name, email, password });
    resp.json({ message: "user is updated", result });
  },
  deleteByid: async (reqp: Request, resp: Response) => {
    const { id }: any = reqp.params;
    await user.findByIdAndDelete(id);
    resp.json({ message: "user is deleted" });
  },
};
