const Playlist = require("../model/Playlist");

//Get Playlist for the user
const getPlaylist = async (req, res) => {
  try {
    const userId = req.id;
    const playlist = await Playlist.find({ userId });
    res.status(200).json({ success: true, data: playlist });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

// Create playlist record
const createPlaylist = async (req, res) => {
  try {
    const userId = req.id;
    const { name } = req.body;

    const playlist = await Playlist.create({
      userId,
      PlaylistName: name,
    });

    res.status(200).json({ success: true, message: `playlist ${name} created`, data: playlist });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

// Update playlist record
const updatePlaylist = async (req, res) => {
  try {
    const userId = req.id;
    const playlistId = req.params.id;

    let playlist = await Playlist.findById(playlistId);
    if (!playlist) {
        return res.status(404).json({ success: false, message: 'Playlist not found' });
      }
    if (playlist.userId !== userId) {
        return res.status(403).json({ success: false, message: 'You are not authorized to update this playlist' });
    }
    playlist.name = req.body.name || playlist.name;

    res.status(200).json({ success: true, data: playlist });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// Delete playlist record
const deletePlaylist = async (req, res) => {
  try {
    const userId = req.id;
    const playlistId = req.params.id;
    const playlsit = await Playlist.findOne({ _id: playlistIdId });

    if (!playlist) {
      return res.status(404).json({ success: false, message: "Playlist is not found" });
    }

    await playlist.deleteOne();

    res.status(200).json({ success: true, message: `Playlist ${playlist.playlistName} deleted` });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createPlaylist,
  getPlaylist,
  updatePlaylist,
  deletePlaylist,
};
