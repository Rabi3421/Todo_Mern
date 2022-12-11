import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const userName = process.env.user_id;
const password = process.env.user_password;

const database = () => {
  const url =
    `mongodb+srv://${userName}:${password}@cluster0.n99jgz8.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(url, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("database connected");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
  });
  mongoose.connection.on("error",()=>{
    console.log("connection error",error.message);
  })
};
export default database;