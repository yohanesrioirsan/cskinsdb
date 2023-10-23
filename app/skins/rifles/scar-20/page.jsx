import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/rifles/scar20.json";

function M4a4() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>SCAR-20 Skins</h1>
        <p>
          The SCAR-20 is a semi-automatic sniper rifle that trades a high rate
          of fire and powerful long-distance damage for sluggish movement speed
          and big price tag.
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

export default M4a4;
