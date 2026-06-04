import mongoose from "mongoose";

export interface IPendingSubscriber {
  _id?: string;
  email: string;
  otp: string;
  otpExpiresAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const PendingSubscriberSchema = new mongoose.Schema<IPendingSubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    otp: {
      type: String,
      required: true,
    },
    otpExpiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.models.PendingSubscriber ||
  mongoose.model<IPendingSubscriber>(
    "PendingSubscriber",
    PendingSubscriberSchema
  );
