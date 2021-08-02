const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute= require("./routes/users");
const authRoute= require("./routes/auth");
const postRoute= require("./routes/posts");


dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology: true},()=>{
    console.log("Connected");
   
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/",(req,res)=>{
    res.send("Welcome to social");
});

app.listen(8800, () => {
    console.log("Back End is running")
})