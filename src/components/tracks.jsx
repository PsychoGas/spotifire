import { useEffect, useState } from "react";
import axios from "axios";
import "@/app/globals.css";

export default function Tracks({ token }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://api.spotify.com/v1/me/albums",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log("User Data:", response.data);
          setUserData(response.data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };

      fetchData();
    }
  }, [token]);

  return userData ? (
    <>
      <h1>Album Name: {userData.items[0].album.name}</h1>
      <p>------------------------------------------</p>
      {userData.items[0].album.tracks.items.map((music) => (
        <div key={music.id}>
          <h2>Track Name - {music.name}</h2>
          <h2>Artist - {music.artists[0].name}</h2>
          <p>---------------------------------------</p>
        </div>
      ))}
    </>
  ) : (
    <h2>Loading...</h2>
  );
}
