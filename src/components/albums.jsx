export default function Albums({ userAlbums }) {
  return (
    <>
      <ul>
        {userAlbums.items.map((album, index) => (
          <li key={album.album.id}>Album Name - {album.album.name}</li>
        ))}
      </ul>
    </>
  );
}
