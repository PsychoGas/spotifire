export default function Playlists({ userPlaylists }) {
  return (
    <>
      <ul>
        {userPlaylists.items.map((playlist, index) => (
          <li key={playlist.id}>Playlist Name - {playlist.name}</li>
        ))}
      </ul>
    </>
  );
}
