"use client";
import SignIn from "@/components/signIn";
import SignOut from "@/components/signOut";
import Tracks from "@/components/tracks";
import { useState, useEffect } from "react";
export default function Page() {
  const [token, setToken] = useState("");

  return (
    <div style={{ backgroundColor: "#181716" }}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-white drop-shadow-lg">
        SpotiFire
      </h1>
      {!token && <SignIn token={token} setToken={setToken} />}
      <SignOut token={token} setToken={setToken} />
      {token && <Tracks token={token} />}
    </div>
  );
}
