const express = require("express");
const app = express();
const initDB = require("./config/db") 
const dotenv = require("dotenv");
const userRouter = require("./router/user");
const PostRouter = require("./router/Post")
const cors = require("cors");
dotenv.config();

initDB()
app.use(cors());
app.use(express.json());
app.use("/api/user" , userRouter);
app.use("/api/post" , PostRouter )

app.listen(5000 , ()=>{
          console.log("Servidor corriendo")
})