import React from "react";
import "@/app/globals.css";

export default function SignOut({ token, setToken }) {
  function handleSignOut() {
    window.localStorage.removeItem("token");
    setToken("");
  }

  return <button onClick={handleSignOut}>Sign Out</button>;
}
