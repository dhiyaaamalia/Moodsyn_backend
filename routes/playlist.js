const express = require("express");
const router = express.Router();
const verify = require("../middleware/verifyJWT");
const playlistController = require("../controller/playlist.controller");

// Create playlist record
router.post("/", verify, playlistController.createPlaylist);

// Get playlist records for the user
router.get("/", verify, playlistController.getPlaylist);

// Update playlist record
router.patch("/:id", verify, playlistController.updatePlaylist);

// Delete playlist record
router.delete("/:id", verify, playlistController.deletePlaylist);

module.exports = router;
