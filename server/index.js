import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js';
const app = express();

app.use('/posts', postRouter);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//htpps://mongodb
const connectionUrl = "mongodb+srv://admin:8EwL4ykisf8DGCcL@cluster0.uaqsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(connectionUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));
