import { Schema, model, models } from "mongoose";

const registrationSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["student", "college", "sponsor"],
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    organizationName: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Registration = models.Registration || model("Registration", registrationSchema);
