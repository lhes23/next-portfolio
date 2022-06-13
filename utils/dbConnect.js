import mongoose from "mongoose";

export default function dbConnect() {
  mongoose.connect(process.env.MONGODB_URI);
}
