import React from "react";
import "@/app/globals.css";

export default function SignOut({ token, setToken }) {
  function handleSignOut() {
    window.localStorage.removeItem("token");
    setToken("");
  }

  return (
    <div className="flex justify-center pt-10">
      <button onClick={handleSignOut} className="btn-18">
        <span className="text-container">
          <span className="text">Sign Out</span>
        </span>
      </button>
    </div>
  );
}
