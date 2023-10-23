import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/pistol/tec9.json";

function Tec9() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Tec-9 Skins</h1>
        <p>
          An ideal pistol for the Terrorist on the move, the Tec-9 is lethal in
          close quarters and features a high magazine capacity.
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

export default Tec9;
