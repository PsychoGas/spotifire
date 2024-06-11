import axios from "axios";
import { useEffect } from "react";

export default function FetchData({
  token,
  userAlbums,
  setuserAlbums,
  userPlaylists,
  setuserPlaylists,
}) {
  useEffect(() => {
    if (token) {
      const fetchUserAlbums = async () => {
        try {
          const response = await axios.get(
            "https://api.spotify.com/v1/me/albums",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          // console.log("User Albums:", response.data);
          setuserAlbums(response.data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };

      const fetchUserPlaylists = async () => {
        try {
          const response = await axios.get(
            "https://api.spotify.com/v1/me/playlists",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          // console.log("User Playlists:", response.data);
          setuserPlaylists(response.data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };

      fetchUserPlaylists();
      fetchUserAlbums();
    }
  }, [token]);

  return userAlbums ? <h3></h3> : <h3></h3>;
}
