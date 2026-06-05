const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");


dotenv.config();

const app = express();

mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.log(err));


// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});