import Card from "./ui/card";
export default function Playlists({
  userPlaylists,
  selectedPlaylists,
  togglePlaylistSelection,
}) {
  return (
    <>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingLeft: "100px",
          marginBottom: "0",
        }}
      >
        {userPlaylists.items.map((playlist, index) => (
          <li
            key={playlist.id}
            style={{ flex: "0 0 calc(25% - 10px)", marginBottom: "10px" }}
            className="py-5"
          >
            <div className="py-10px px-10px">
              <Card
                Name={playlist.name}
                Cover={playlist.images[0].url}
                NumberOfTracks={playlist.tracks.total}
                isSelected={selectedPlaylists.includes(playlist.id)}
                onClick={() => togglePlaylistSelection(playlist.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      {console.log(selectedPlaylists)}
    </>
  );
}
