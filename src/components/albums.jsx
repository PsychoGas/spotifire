import Card from "./ui/card";
export default function Albums({ userAlbums }) {
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
        {userAlbums.items.map((album, index) => (
          <li
            className="py-5"
            key={album.album.id}
            style={{ flex: "0 0 calc(25% - 10px)", marginBottom: "10px" }}
          >
            <div className="py-10px px-10px">
              <Card
                Name={album.album.name}
                Cover={album.album.images[0].url}
                NumberOfTracks={album.album.tracks.items.length}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
