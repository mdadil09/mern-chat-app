const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("../backend/routes/userRoutes");
const chatRoutes = require("../backend/routes/chatRoutes");

const { chats } = require("./data/data");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();

app.use(express.json());

//Database Connection
connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
