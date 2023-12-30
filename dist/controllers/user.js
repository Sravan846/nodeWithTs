"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../model/user"));
exports.default = {
    newUser: (reqp, resp) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, email, password } = reqp.body;
        yield user_1.default.create({ name, email, password });
        resp.json({ message: "user is added" });
    }),
    getAlluser: (reqp, resp) => __awaiter(void 0, void 0, void 0, function* () {
        var result = yield user_1.default.find();
        resp.json({ message: "list of user", result });
    }),
    getbyId: (reqp, resp) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = reqp.params;
        var result = yield user_1.default.findById(id);
        resp.json({ message: "get user by id ", result });
    }),
    updateByid: (reqp, resp) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = reqp.params;
        const { name, email, password } = reqp.body;
        var result = yield user_1.default.findByIdAndUpdate(id, { name, email, password });
        resp.json({ message: "user is updated", result });
    }),
    deleteByid: (reqp, resp) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = reqp.params;
        yield user_1.default.findByIdAndDelete(id);
        resp.json({ message: "user is deleted" });
    }),
};
