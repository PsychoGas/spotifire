"use client";

import "@/app/globals.css";
import { useEffect } from "react";

export default function SignIn({ token }) {
  const clientId = "49e3ee9fe2494ec5a7908fba1799d7bf";
  const redirectUri = "http://localhost:3000";
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";
  const scopes = "user-library-read";

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      const hashParams = new URLSearchParams(hash.substring(1));
      token = hashParams.get("access_token");
      if (token) {
        window.location.hash = "";
        window.localStorage.setItem("token", token);
      }
    } else {
      token = "";
    }
  }, []);

  return (
    <>
      <a
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopes}`}
      >
        Login with Spotify
      </a>
    </>
  );
}
