import express from 'express'
import bodyParser from 'body-parser'
import  Mongoose  from 'mongoose'
import cors from 'cors'

const app = express();

app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));

app.use(cors());

const connection_url = ''