import express from 'express';

import mongoose from 'mongoose';

import {BlogContent}  from '../models/blogModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try{

        if(!req.body.title || !req.body.author || !req.body.description){
            return res.status(400).send({message:'Send all the required fields'})
        }

        const newBlog = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description
        };


        const blog = await BlogContent.create(newBlog);
        return res.status(201).send(blog);
    }catch(err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
});

router.get('/',async (req, res) => {
    try{
        const Blog = await BlogContent.find({});
        return res.status(200).json({
            count: Blog.length,
            data: Blog
        });
    }catch(err){
        console.log(err.message);
        response.status(500).send({message: err.message});
    }
})

export default router