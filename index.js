import express from "express";
import cors from "cors";
import connectToDB from "./server/mongo-db.js";
import noteRouters from "./server/routes/notesRoutes.js";

const app = express();
await connectToDB();
app.use(
  cors({
    origin: "https://notesappbyraj.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/api", noteRouters);

app.listen(3000, console.log(`Server started at port 3000`));
