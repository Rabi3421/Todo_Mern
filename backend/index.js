import express from "express";
import database from "./DataBase/db.js";
const app = express();

database()
app.listen(8080,()=>{
    console.log("listening on port 8080")
})