import mongoose from "mongoose";
interface User {
  name: string;
  email: string;
  password: string;
}
const user = new mongoose.Schema<User>({
  name: String,
  email: String,
  password: String,
});
user.set("timestamps", true);
export default mongoose.model<User>("user", user);
