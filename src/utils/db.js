import mongoose from "mongoose";

mongoose.connect("mongodb://username:password@host:port/database?options...");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (error) {
    throw new Error("Connect to database failed");
  }
};

export default connect;
