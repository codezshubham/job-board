import mongoose, { type Mongoose } from "mongoose";

type MongooseCache = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const mongooseUri = process.env.MONGODB_URI;

if (!mongooseUri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const MONGODB_URI = mongooseUri;

const cached = globalThis.mongooseCache ?? { conn: null, promise: null };
globalThis.mongooseCache = cached;

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Database connected successfully");
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
