"use client";
import SignIn from "@/components/signIn";
import SignOut from "@/components/signOut";
import FetchData from "@/components/fetchData";
import Tracks from "@/components/tracks";

import { useState } from "react";

export default function Page() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState(null);

  return (
    <>
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-white drop-shadow-lg">
        SpotiFire
      </h1>
      {!token && <SignIn token={token} setToken={setToken} />}
      <FetchData token={token} userData={userData} setUserData={setUserData} />
      {token && <SignOut token={token} setToken={setToken} />}
      {token && <Tracks userData={userData} />}
    </>
  );
}
