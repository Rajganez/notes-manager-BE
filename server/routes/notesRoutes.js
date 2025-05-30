import { Router } from "express";
import { addNotes, getNotes } from "../controllers/notesController.js";

const noteRouters = Router();

noteRouters.get("/notes", getNotes);
noteRouters.post("/notes", addNotes)

export default noteRouters;
