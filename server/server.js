import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectToDatabase } from './connectToDatabase.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = connectToDatabase();

db.on('error', console.error.bind(console, "Mongoose connection error:"));
db.once('open', () => {
    console.log("Successfully connected to mongoose database!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});