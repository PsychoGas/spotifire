"use client";
import SignIn from "@/components/signIn";
import SignOut from "@/components/signOut";
import FetchData from "@/components/fetchData";
import Playlists from "@/components/playlists";
import SelectedCount from "@/components/ui/selected";
import fetchTracksFromPlaylistId from "@/lib/fetchTracksFromID.js";
import fetchYoutubeVideoIds from "@/lib/fetchYoutubeId.js";

import { useState } from "react";

export default function Page() {
  const [token, setToken] = useState("");
  const [userAlbums, setuserAlbums] = useState(null);
  const [userPlaylists, setuserPlaylists] = useState(null);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  let tracks = [];
  let idArray = [];

  const togglePlaylistSelection = (playlistId) => {
    setSelectedPlaylists((prevSelectedPlaylists) => {
      if (prevSelectedPlaylists.includes(playlistId)) {
        return prevSelectedPlaylists.filter((id) => id !== playlistId);
      } else {
        return [...prevSelectedPlaylists, playlistId];
      }
    });
  };

  const handleFetchTracks = async () => {
    tracks = await fetchTracksFromPlaylistId(selectedPlaylists, token);
    console.log("Tracks Fetched");
    console.log(tracks);
  };

  const handleFetchYoutubeIds = async () => {
    idArray = await fetchYoutubeVideoIds(tracks);
    console.log("Youtube IDs Fetched");
    console.log(idArray);
  };

  const createYoutubeLinks = (videoIds) => {
  return videoIds.map((id) => `https://www.youtube.com/watch?v=${id}`);
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
      <div className="flex justify-center pt-10">
        <button className="btn-18" onClick={handleFetchTracks}>
          <span className="text-container">
            <span className="text">Fetch Tracks</span>
          </span>
        </button>
      </div>
      <div className="flex justify-center pt-10 pb-10">
        <button className="btn-18" onClick={handleFetchYoutubeIds}>
          <span className="text-container">
            <span className="text">Get Youtube IDs</span>
          </span>
        </button>
      </div>
    </>
  );
}
