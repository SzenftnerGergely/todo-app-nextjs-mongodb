import mongoose, { Schema } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}

mongoose.connect(MONGODB_URI);
mongoose.Promise = global.Promise;

const todoSchema = new Schema(
  {
    title: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;