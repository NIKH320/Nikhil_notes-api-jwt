
const Note  = require("../models/Note");

const {successResponse, errorResponse } = require("../utils/apiResponse");



//creating notes with model
exports.createNote = async (req, res, next) => {
    try {
        const noteText = req.body.note;

        if (!noteText) {
            return errorResponse(res,"Note text is required",400);
        }

        //Creating Notes withNote schema
        const note = await Note.create({
              text: noteText,
              user: req.userId
          });

        return successResponse(res,note,"Note created");

    } catch (err) {
        next(err);
    }
};



//Displaying
exports.getNotes = async (req, res, next) => {
    try {

        //throw new Error("Test error");

        const notes = await Note.find({ user: req.userId });
        return successResponse(res, notes, "Notes fetched");

    } catch (err) {
        next(err);
    }
};



//Deleting
exports.deleteNote = async (req, res, next) => {
    try {
        
            const note = await Note.findOneAndDelete({
            _id: req.params.id,
            user: req.userId
        });

     if (!note) {
            return errorResponse(res, "Not authorized", 403);
      }

           

        return successResponse(res, null, "Note deleted");
    } catch (err) {
        next(err);
    }
};




