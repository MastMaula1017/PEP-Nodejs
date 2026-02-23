import express from "express";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
// import productRouter from "./routes/product.route.js";

const app =express();


app.use("/api/users",userRouter);
app.use("/api/products",productRouter);



app.listen(8000,()=>{
    console.log("Server listening on PORT 8000");
});