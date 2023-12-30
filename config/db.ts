import mongoose from 'mongoose';


mongoose
  .connect("mongodb://127.0.0.1:27017/ts_demo")
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
