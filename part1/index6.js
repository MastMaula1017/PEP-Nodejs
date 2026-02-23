import express from "express"

const app = express();


app.get("/",(req,res)=>{
    res.send("hello" + req.query.name +req.query.age);
});
//htpp://localhost:8000?name=vansh&age=21

app.listen(8000,()=>{
    console.log("Server running on PORT 8000");
    
});