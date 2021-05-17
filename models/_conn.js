import mongoose from "mongoose";
import config from "../config.js";
const dbTarget = "users";
console.log("----------------------------");
console.log(
  `mongodb+srv://${config.db.dbUser}:${config.db.dbPassword}@postapp.oxrod.mongodb.net/${dbTarget}?retryWrites=true&w=majority`
);
console.log("----------------------------");
const DbURI = `mongodb+srv://${config.db.dbUser}:${config.db.dbPassword}@gifi.wsuv8.mongodb.net/${dbTarget}?retryWrites=true&w=majority`;

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
