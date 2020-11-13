require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 3001;

app.use(cors());

//MongoDB Connection Setup

// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

// if (process.env.NODE_ENV !== "production") {
//     const mDb = mongoose.connection;
//     mDb.on("open", () => {
//       console.log("MongoDB is conneted");
//     });

// mDb.on("error", (error) => {
//     console.log(error);
//   });

//   Logger --
//   app.use(morgan("tiny"));
// }
const userRouter = require("./src/routers/user.router");

app.use("/v1/user", userRouter);
// app.use("/v1/ticket", ticketRouter);
// app.use("/v1/tokens", tokensRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const error = new Error("Resources not found!");
  error.status = 404;
  next(error);
});

//Error handler
const handleError = require("./src/utils/errorHandler");

app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(port, () => {
  console.log(`Server is ready on http://localhost:${port}`);
});
