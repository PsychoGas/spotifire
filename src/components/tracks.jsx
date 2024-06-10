import { useEffect, useState } from "react";
import axios from "axios";
import "@/app/globals.css";

export default function Tracks({ userData }) {
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
