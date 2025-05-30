import { db } from "../mongo-db.js";

const notesController = db.collection("notes");

//------------------Get Notes-------------------------//
export const getNotes = async (req, res) => {
  try {
    const allNotes = await notesController.find({}).toArray();
    return res.status(201).json({ allNotes });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
};

//------------------Add Note--------------------------//
export const addNotes = async (req, res) => {
  const payload = req.body;
  try {
    if (payload) {
      const addNote = await notesController.insertOne({ ...payload });
      if (addNote.acknowledged)
        return res.status(200).json({ msg: addNote.insertedId });
    } else return res.status(401).json({ msg: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
};
