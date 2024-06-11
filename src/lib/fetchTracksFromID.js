import axios from "axios";

// let playlistIds = ["0CA1E3utntdCHQYcTCakdD", "2KsRFJpi7OE5Do0h0eX905"];
// let token =
//   "BQBSPcbffHUfDgW6x1C1YRKWjeQzm0Rs8EI2ltFqmbmsskBPk2FVng1pmCi6aAvi1ryVL3EXIlH4mVD0vulTb50wTII08dCtwZp70MzF3kX3inYg_JCPVYLhMof6M0rVcK1tgMVo3ED0VLBwF821soTNxOhapwBFk7t3uNqWX-rZWVqJrW3BvK2Kgzosz1cJl4TyBJ8ZYXzLiyaqbBB2dlki718";

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

  console.log(tracks);
}
