const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const {
    createNote,
    getNotes,
    deleteNote
} = require("../controllers/noteController");

router.post("/notes", auth, createNote);
router.get("/notes", auth, getNotes);
router.delete("/notes/:id", auth, deleteNote);

module.exports = router;
