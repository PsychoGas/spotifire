import axios from "axios";
import { useEffect } from "react";

export default function FetchData({ token, userData, setUserData }) {
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
    <h3>Successfully Fetched Data</h3>
  ) : (
    <h3>Fetching Data...</h3>
  );
}
