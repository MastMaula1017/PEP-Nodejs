import express from "express"

const app = express();


// app.use("/",express.static("images"));
app.use("/images",express.static("images"));//images/2.jpg
app.use("/public",express.static("public"));//public/img/2.jpg



app.listen(8000,()=>{
    console.log("Server listening on PORT 8000");
});