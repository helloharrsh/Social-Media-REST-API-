const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");



dotenv.config();
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log("connected to mongodb")
})

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);



app.get("/",(req,resp)=>{
    resp.send("welcome to homepage")
})

app.get("/users",(req,resp)=>{
    resp.send("welcome to user page")
})



app.listen(5000,()=>{
    console.log("hello server running")
});