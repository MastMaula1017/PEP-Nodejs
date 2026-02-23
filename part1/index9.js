import express from "express";

const app = express();

const logger = () => {}

app.use(logger);

app.get("/",(req,res)=>{
    // res.end();
    // res.send("HH");
    // res.json({
    //     name:"vansh"
    // })
});


app.listen(8081);