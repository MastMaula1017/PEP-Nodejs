import express from "express";


const productRouter = express.Router();


productRouter.get("/",(req,res)=>{
    res.send("products");
});

export default productRouter;