import { Schema, models, model } from "mongoose";

const UserSchema = Schema({
  firstName: String,
  lastName: String,
});

const PersonalDetailSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
});

export const PersonalDetail =
  models?.PersonalDetail || model("PersonalDetail", PersonalDetailSchema);
export const User = models?.User || model("User", UserSchema);

// export default User;
