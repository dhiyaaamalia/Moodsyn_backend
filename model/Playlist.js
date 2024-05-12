const mongoose = require("mongoose");

const playlistSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },  
  playlistName: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Playlist", playlistSchema);
