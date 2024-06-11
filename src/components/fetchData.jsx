import axios from "axios";
import { useEffect } from "react";

export default function FetchData({ token, setuserPlaylists }) {
  useEffect(() => {
    if (token) {
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
    }
  }, [token]);
  return null;
}
