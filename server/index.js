import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

//Express body-parser is an npm module used to process data sent in an HTTP request body.

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//Cors : cross origin resource sharing
//Cors : https://www.youtube.com/watch?v=4KHiSt0oLJ0

app.use(cors());

//MongoDB
const CONNECTION_URL =
  "mongodb+srv://Nabin:mTbIDRFWzJ0MSGat@cluster0.iurryai.mongodb.net/";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //depreciated
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on ports :${PORT}`))
  )
  .catch((error) => console.log(error.message));

//for warning on console
// mongoose.set("useFindAndModify", false); //throws error
