import express from 'express';

import mongoose from 'mongoose';

import {PORT , mongoDBURL} from "./config.js"

import cors from "cors"

import Blogs from './routes/Blogs.js';

import bodyParser from 'body-parser';
 
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => { 
    res.send("Welcome Back Chief!");
});


app.use('/blogs',Blogs)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected");
        app.listen(PORT,() => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(`Failed to connect to port ${err.message}`);
    })

