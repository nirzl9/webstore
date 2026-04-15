import { mongoose } from "mongoose";

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: [true, "User location is required"],
  },

  number: {
    type: Number,
    required: [true, "Must include phone number"],
    unique: true,
  },
});

const profilemodel = mongoose.model("profile", profileSchema);
export default profilemodel;
