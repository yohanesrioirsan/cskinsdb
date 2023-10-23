import React from "react";
import NavBar from "./components/navBar";
import MainHome from "./components/mainHome";

export default function Home() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="container">
        <MainHome />
      </div>
    </>
  );
}
