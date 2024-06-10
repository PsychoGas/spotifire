"use client";
import SignIn from "@/components/signIn";
import SignOut from "@/components/signOut";
import FetchData from "@/components/fetchData";
import Albums from "@/components/albums";
import Playlists from "@/components/playlists";
import Card from "@/components/ui/card";

import { useState } from "react";

export default function Page() {
  const [token, setToken] = useState("");
  const [userAlbums, setuserAlbums] = useState(null);
  const [userPlaylists, setuserPlaylists] = useState(null);

  return (
    <>
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-white drop-shadow-lg shadow-lg">
        SpotiFire
      </h1>
      {!token && <SignIn token={token} setToken={setToken} />}
      <FetchData
        token={token}
        userAlbums={userAlbums}
        setuserAlbums={setuserAlbums}
        userPlaylists={userPlaylists}
        setuserPlaylists={setuserPlaylists}
      />
      {token && <SignOut token={token} setToken={setToken} />}
      <div className="pt-5">
        <h1>Albums</h1>
        {userAlbums && token && <Albums userAlbums={userAlbums} />}
      </div>
      ----------------------------
      <h1>Playlists</h1>
      ----------------------------
      {userPlaylists && token && <Playlists userPlaylists={userPlaylists} />}
    </>
  );
}
