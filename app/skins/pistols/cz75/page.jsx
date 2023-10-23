import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/pistol/czAuto.json";

function Cz75() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>CZ75-Auto Skins</h1>
        <p>
          A fully automatic variant of the CZ75, the CZ75-Auto is another
          inexpensive choice against armored opponents. But with very little
          ammo provided, strong trigger discipline is required.
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

export default Cz75;
