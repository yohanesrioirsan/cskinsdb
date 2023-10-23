import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/shotgun/sawedoff.json";

function SawedOff() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Sawed-Off Skins</h1>
        <p>
          The classic Sawed-Off deals very heavy close-range damage, but with
          its low accuracy, high spread and slow rate of fire, you'd better kill
          what you hit.
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

export default SawedOff;
