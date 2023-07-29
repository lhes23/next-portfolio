import mongoose from "mongoose"

export default function dbConnect() {
  if (!process.env.MONGODB_URI) return false
  mongoose.connect(process.env.MONGODB_URI)
}
