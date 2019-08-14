import express from 'express';
import mongoose from 'mongoose';

import routes from './routes/index';

const app = express();

mongoose.connect('mongodb://localhost');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(`Error: ${err}`);
    next();
});

routes(app);

export default app;