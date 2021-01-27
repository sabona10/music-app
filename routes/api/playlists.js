const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../../controllers/api/playlists');

/* GET /api/puppies */
router.get("/:id", playlistsCtrl.index);
router.post("/", playlistsCtrl.create);
router.get("/one/:id", playlistsCtrl.show);
router.put("/:id", playlistsCtrl.update);
router.put("/deleteOne/:id", playlistsCtrl.delete);
router.delete("/deletePlaylist/:id", playlistsCtrl.deletePlaylist);

module.exports = router;