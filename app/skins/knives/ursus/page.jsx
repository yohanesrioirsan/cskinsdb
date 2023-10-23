import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/ursus.json";

function UrsusKnife() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Ursus Knife Skins</h1>
        <p>
          This tanto-style survival knife features a faceted blade and full
          tang, complete with impact pommel. No fuss, no moving parts - just a
          reliable blade thats ready to work.
        </p>
      </div>
      <div className="c____container">
        {Weapon.map((weapon) => {
          return (
            <div className="weapon_box" key={weapon.id}>
              <Card src={weapon.image} weapon={weapon} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UrsusKnife;
