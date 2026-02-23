import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Hello"});
});


app.listen(8000,()=>{
    console.log("Server listening on PORT 8000");
});