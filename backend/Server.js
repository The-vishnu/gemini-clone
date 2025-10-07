import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import resposnseRoute from './routes/response.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("server started...");
});

app.use("/api/", resposnseRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
}); 