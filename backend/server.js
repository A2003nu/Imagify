import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";


// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" })); // Change "*" to frontend domain for better security

// Start server
const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

   app.use('/api/user',userRouter)
   app.use('/api/image',imageRouter)
    app.get("/", (req, res) => res.send("API working"));

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
