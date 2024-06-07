import React from "react";
import { Button } from "@material-tailwind/react";
import "@/app/globals.css";

export default function SignOut({ token, setToken }) {
  function handleSignOut() {
    window.localStorage.removeItem("token");
    setToken("");
  }

  return (
    <Button color="red" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}
