// require("dotenv").config();

const express = require('express');
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: "*" 
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`Listening for requests on port: ${PORT}`);
});

