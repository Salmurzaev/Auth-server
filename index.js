require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express();

const testRouter = require('./routes/testRouter');

const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/test', testRouter);
app.use('/user', userRouter);

app.use(errorMiddleware);
const start = async () => {
  try {
    app.listen(PORT, () => console.log(`start on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
