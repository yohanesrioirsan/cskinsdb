import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/paracord.json";

function ParacordKnife() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Paracord Knife Skins</h1>
        <p>
          This fixed-blade survival knife is designed to withstand being used as
          both a weapon and a tool, such as for setting traps, hunting animals
          or cutting foliage. The handle is wrapped in a length of multi-purpose
          paracord.
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

export default ParacordKnife;
