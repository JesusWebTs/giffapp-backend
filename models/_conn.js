import mongoose from "mongoose";
import credentials from "../credentials.js";
const dbTarget = "users";
const DbURI = `mongodb+srv://${process.env.dbUser}:${process.env.dbPassword}@postapp.oxrod.mongodb.net/${dbTarget}?retryWrites=true&w=majority`;


const conn = mongoose
  .connect(DbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB is Connected");
    console.log("---------------");
  })
  .catch((err) => {
    console.log(err);
  });

export default conn;
