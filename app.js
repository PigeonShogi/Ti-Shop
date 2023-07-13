require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./routes/index");

const app = express();
const corsOptions = {
  origin: [
    "https://tishop.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

const PORT = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}...`);
});
