import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  try {
    console.log('MongoDB connecting...');
    await mongoose.connect(process.env.DB_URL);

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
