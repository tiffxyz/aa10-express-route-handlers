// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());

app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

app.get('/artists', (req, res) => {
  res.json(getAllArtists())
});

app.post('/artists', (req, res) => {
  res.status(201)
  let artist = addArtist(req.body)
  res.json(artist)
});

app.get('/artists/latest', (req, res) => {
  res.json(getLatestArtist())
});

app.get('/artists/latest/albums', (req, res) => {
  res.json(getAlbumsForLatestArtist())
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
