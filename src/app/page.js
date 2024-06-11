"use client";
import SignIn from "@/components/signIn";
import SignOut from "@/components/signOut";
import FetchData from "@/components/fetchData";
import Playlists from "@/components/playlists";
import SelectedCount from "@/components/ui/selected";
import fetchTracksFromPlaylistId from "@/lib/fetchTracksFromID.js";

import { useState } from "react";

export default function Page() {
  const [token, setToken] = useState("");
  const [userAlbums, setuserAlbums] = useState(null);
  const [userPlaylists, setuserPlaylists] = useState(null);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  const togglePlaylistSelection = (playlistId) => {
    setSelectedPlaylists((prevSelectedPlaylists) => {
      if (prevSelectedPlaylists.includes(playlistId)) {
        return prevSelectedPlaylists.filter((id) => id !== playlistId);
      } else {
        return [...prevSelectedPlaylists, playlistId];
      }
    });
  };

  return (
    <>
      <h1 className="pt-10 text-5xl md:text-6xl font-extrabold text-center text-white drop-shadow-lg shadow-lg">
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
      {/* <div className="pt-5">
        {token && userAlbums && (
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-lg shadow-lg">
            Albums
          </h1>
        )}
        {userAlbums && token && <Albums userAlbums={userAlbums} />}
      </div> */}
      {selectedPlaylists && <SelectedCount count={selectedPlaylists.length} />}
      {token && userPlaylists && (
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-lg shadow-lg pt-5 pb-5">
          Playlists
        </h1>
      )}
      {userPlaylists && token && (
        <Playlists
          userPlaylists={userPlaylists}
          selectedPlaylists={selectedPlaylists}
          togglePlaylistSelection={togglePlaylistSelection}
        />
      )}
      <button
        onClick={() => fetchTracksFromPlaylistId(selectedPlaylists, token)}
      >
        Send Request
      </button>
    </>
  );
}
