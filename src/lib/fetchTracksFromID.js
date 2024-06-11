import axios from "axios";

export default async function fetchTracksFromPlaylistId(playlistIds, token) {
  let tracks = [];
  console.log("Fetch Tracks from PlaylistID Called");
  await Promise.all(
    playlistIds.map(async (playlistId) => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      data.items.forEach((item) => {
        const track = item.track;
        tracks.push(`${track.name} by ${track.artists[0].name}`);
      });
    })
  );

  return tracks;
}
