const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Router 1: Get Notes
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error occured.");
  }
});

//Router 2: Add Notes (Login Required)
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Please provide a valid title.").isLength({ min: 4 }),
    body("description", "Please provide a valid description.").isLength({
      min: 4,
    }),
    body("tag", "Please provide a valid tag."),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error occured.");
    }
  }
);
//Router 3: Update the Note

router.put("/updatenote/:id", fetchUser, async (req, res) => {
  const { title, descripton, tag } = req.body;
  try {
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (descripton) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  let note = await Notes.findById(req.params.id);
  if (!note) {
   return res.status(404).send("Not Found");
  }

  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
  
} catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error occured.");
  }
});

//Router 4: Delete the Notes

router.delete("/deletenote/:id", fetchUser, async (req, res) => {
 
  try {
    
  let note = await Notes.findById(req.params.id);
  if (!note) {
   return res.status(404).send("Not Found");
  }

  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  note = await Notes.findByIdAndDelete(req.params.id);
  res.json({ "Success":"Note has been deleted.",note:note });
} catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error occured.");
  }
});


module.exports = router;
