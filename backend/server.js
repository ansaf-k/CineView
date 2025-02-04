import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("CineView World!");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
