import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/pistol/fiveSeven.json";

function FiveSeven() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Five-SeveN Skins</h1>
        <p>
          Highly accurate and armor-piercing, the pricy Five-Seven is a
          slow-loader that compensates with a generous 20-round magazine and
          forgiving recoil.
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

export default FiveSeven;
