"use client";

import "@/app/globals.css";
import { useEffect } from "react";

export default function SignIn({ token, setToken }) {
  const clientId = "49e3ee9fe2494ec5a7908fba1799d7bf";
  const redirectUri = "http://localhost:3000";
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";
  const scopes = "user-library-read+playlist-read-private";

  useEffect(() => {
    const hash = window.location.hash;
    let storedToken = window.localStorage.getItem("token");

    if (!storedToken && hash) {
      const hashParams = new URLSearchParams(hash.substring(1));
      storedToken = hashParams.get("access_token");
      if (storedToken) {
        window.location.hash = "";
        window.localStorage.setItem("token", storedToken);
        setToken(storedToken);
      }
    } else {
      setToken(storedToken);
    }
  }, [setToken]);

  return (
    <div className="flex justify-center pt-10">
      <button
        className="btn-18"
        onClick={() => {
          window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopes}`;
        }}
      >
        <span className="text-container">
          <span className="text">Login With Spotify</span>
        </span>
      </button>
    </div>
  );
}
