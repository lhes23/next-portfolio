import { Schema, models, model } from "mongoose";

const UserSchema = Schema({
  personalDetails: Object,
  professionalDetails: Object,
});

// const PersonalDetailSchema = Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
// });

// const ProfessionalDetailSchema = Schema({
//   jobTitles: [String],
//   mainTitle: String,
// });

const User = models?.User || model("User", UserSchema);
export default User;
