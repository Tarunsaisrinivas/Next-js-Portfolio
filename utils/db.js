import mongoose from "mongoose";
const connection = {
    isConnected: false,
  };
  async function connectDB() {
      try {
          if (connection.isConnected) {
      return;
    }
  
  
    const mongodbURI = process.env.MONGODB_URI;
    if (!mongodbURI) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }
  
    const db = await mongoose.connect(mongodbURI);
    connection.isConnected = db.connections[0].readyState === 1;
  
       console.log("DBconnected");
       return db;
    } catch (error) {
        console.log("DB Error",error);

    }
}

export default connectDB;