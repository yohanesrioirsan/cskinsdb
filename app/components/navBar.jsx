"use client";

import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav ${menuOpen ? "open" : ""}`}>
        <div className="dropdown">
          <button className="dropbtn">
            <a href="/">Home</a>
          </button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Pistols</button>
          <div className="dropdown-content">
            <a href="/skins/pistols/cz75">CZ75-Auto</a>
            <a href="/skins/pistols/deagle">Desert Eagle</a>
            <a href="/skins/pistols/duelist">Dual Berettas</a>
            <a href="/skins/pistols/fiveseven">Five-SeveN</a>
            <a href="/skins/pistols/glock18">Glock-18</a>
            <a href="/skins/pistols/p250">P250</a>
            <a href="/skins/pistols/p2000">P2000</a>
            <a href="/skins/pistols/revolver">R8 Revolver</a>
            <a href="/skins/pistols/tec9">Tec-9</a>
            <a href="/skins/pistols/usps">USP-S</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Mid - Tier</button>
          <div className="dropdown-content">
            <a href="/skins/mid-tier/mac10">MAC-10</a>
            <a href="/skins/mid-tier/mp5-sd">MP5-SD</a>
            <a href="/skins/mid-tier/mp7">MP7</a>
            <a href="/skins/mid-tier/mp9">MP9</a>
            <a href="/skins/mid-tier/p90">P90</a>
            <a href="/skins/mid-tier/pp-bizon">PP-Bizon</a>
            <a href="/skins/mid-tier/ump-45">UMP-45</a>
            <a href="/skins/mid-tier/mag-7">MAG-7</a>
            <a href="/skins/mid-tier/nova">Nova</a>
            <a href="/skins/mid-tier/sawed-off">Sawed-Off</a>
            <a href="/skins/mid-tier/xm1014">XM1014</a>
            <a href="/skins/mid-tier/m249">M249</a>
            <a href="/skins/mid-tier/negev">Negev</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Rifles</button>
          <div className="dropdown-content">
            <a href="/skins/rifles/ak-47">AK-47</a>
            <a href="/skins/rifles/aug">AUG</a>
            <a href="/skins/rifles/awp">AWP</a>
            <a href="/skins/rifles/famas">FAMAS</a>
            <a href="/skins/rifles/g3sg1">G3SG1</a>
            <a href="/skins/rifles/galil-ar">Galil AR</a>
            <a href="/skins/rifles/m4a1-s">M4A1-S</a>
            <a href="/skins/rifles/m4a4">M4A4</a>
            <a href="/skins/rifles/scar-20">SCAR-20</a>
            <a href="/skins/rifles/sg-553">SG 553</a>
            <a href="/skins/rifles/ssg-08">SSG 08</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Knives</button>
          <div className="dropdown-content">
            <a href="/skins/knives/bayonet">Bayonet</a>
            <a href="/skins/knives/bowie">Bowie Knife</a>
            <a href="/skins/knives/butterfly">Butterfly Knife</a>
            <a href="/skins/knives/classic">Classic Knife</a>
            <a href="/skins/knives/falchion">Falchion Knife</a>
            <a href="/skins/knives/flip">Flip Knife</a>
            <a href="/skins/knives/gut">Gut Knife</a>
            <a href="/skins/knives/huntsman">Huntsman Knife</a>
            <a href="/skins/knives/karambit">Karambit</a>
            <a href="/skins/knives/m9-bayonet">M9 Bayonet</a>
            <a href="/skins/knives/navaja">Navaja Knife</a>
            <a href="/skins/knives/nomad">Nomad Knife</a>
            <a href="/skins/knives/paracord">Paracord Knife</a>
            <a href="/skins/knives/shadow-daggers">Shadow Daggers</a>
            <a href="/skins/knives/skeleton">Skeleton Knife</a>
            <a href="/skins/knives/stiletto">Stiletto Knife</a>
            <a href="/skins/knives/survival">Survival Knife</a>
            <a href="/skins/knives/talon">Talon Knife</a>
            <a href="/skins/knives/ursus">Ursus Knife</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Gloves</button>
          <div className="dropdown-content">
            <a href="/skins/gloves">All Gloves</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
