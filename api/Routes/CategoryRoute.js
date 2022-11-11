import express from 'express';
import asyncHandler from 'express-async-handler';
import Category from "../models/Category.js"
import Product from '../models/ProductModel.js';
import { protect, admin } from "../Middleware/AuthMiddleware.js";

const categoryRoute = express.Router();

//get all categories
categoryRoute.get("/", asyncHandler(async(req, res) => {
    const categories = await Category.find({})
    res.json(categories)
}))

//get all products of a category
categoryRoute.get('/items/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const search = await Product.find({categories:`${id}`})
    res.json(search)
}))

//post categorie
categoryRoute.post('/', protect, admin, asyncHandler(async(req, res) => {
    const {name} = req.body;
    const category = new Category({
        name
    })
    if(category){
        const createdCategory = await category.save()
        res.status(201).json(createdCategory)
    } else {
        res.status(404);
        throw new Error("Invalid category data")
    }
}))

export default categoryRoute