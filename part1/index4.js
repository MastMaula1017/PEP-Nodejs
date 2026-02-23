import express from "express"

const app = express();


app.get("/",(req,res)=>{
    res.send("Root");
    console.log(req.headers);
    console.log(req.headers.authorization);
});


// app.get("/:id",(req,res)=>{
//     console.log(req.url);
//     console.log(req.params);
    
// });

// app.get("/:id/:email",(req,res)=>{
//     res.send(req.params.id + req.params.email);
// });
// app.get("/a/:a/:b/:c",(req,res)=>{
//     let a = parseInt(req.params.a)
//     let b = parseInt(req.params.b)
//     let c = parseInt(req.params.c)

//     res.send((a+b+c).toString())
// });


app.listen(8000,()=>console.log("Server Started")
);