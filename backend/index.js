import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

//middleware for parsing request body
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

app.use("/books", booksRoute);

//middleware for handling cors policy
//allow all origins with default of cors
//*app.use(cors());

//allow custom origins
app.use(
  cors({
    origin: "http://localhost:8000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

//connect to mongodb
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to db");
    app.listen(PORT, () => {
      console.log("ok");
    });
  })
  .catch((error) => {
    console.log(error);
  });
