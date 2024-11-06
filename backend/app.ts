import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";
import bodyParser from 'body-parser';

dotenv.config();

const PORT = process.env.PORT || 4000;

import loginRouter from './routes/login';
import feedRouter from './routes/posts';

var app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/posts', feedRouter);

module.exports = app;
