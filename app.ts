import express from "express";
import "./config/db";
import mainRouter from "./routes/index";
import { ENVIRONMENT } from "./global";
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", mainRouter);
console.log('ENVIRONMENT', ENVIRONMENT)
ENVIRONMENT.name="sravan"
console.log('ENVIRONMENT', ENVIRONMENT)
app.listen(4000, () => console.log(`server is started`));
