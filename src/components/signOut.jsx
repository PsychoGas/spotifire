export default function signOut() {
  function handleSignOut() {
    window.localStorage.removeItem("token");
    setToken("");
  }
  return <button onClick={handleSignOut}>Sign Out</button>;
}
