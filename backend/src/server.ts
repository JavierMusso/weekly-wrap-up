import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes/routes";
import errorHandler from "./middleware/errorHandler";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://weekly-app-front.onrender.com"
        : "http://localhost:3001",
    credentials: true,
  })
);

app.use(express.json());

app.use(routes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
