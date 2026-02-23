import express from "express"
import { addProduct,getProducts } from "../controllers/product.controller.js"

const productRouter = express.Router()

productRouter.get("/",getProducts)
productRouter.post("/",addProduct)

export default productRouter