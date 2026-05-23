import mongoose from 'mongoose';

export interface ISubscriber {
  _id?: string;
  email: string;
  otp: string;
  otpExpiresAt: Date;
  isVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const SubscriberSchema = new mongoose.Schema<ISubscriber>(
  {
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
        trim: true,
    },
    otp: { type: String, required: false },
    otpExpiresAt: { type: Date, required: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Subscriber || mongoose.model<ISubscriber>('Subscriber', SubscriberSchema);
