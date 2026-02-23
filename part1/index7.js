import express from "express"

const app = express()


app.get("/",(req,res)=>{
    const user = {
        name:"vansh",
        email:"vansh12@gmail.com",
        role:"role",
    }
    res.send(user);
});

app.listen(8000);