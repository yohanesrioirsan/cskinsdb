import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/butterfly.json";

function ButterflyKnife() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Butterfly Knife Skins</h1>
        <p>
          This is a custom-designed balisong, commonly known as a butterfly
          knife. The defining characteristic of this weapon is the fan-like
          opening of a freely pivoting blade, allowing rapid deployment or
          concealment. As a result, butterfly knives are outlawed in many
          countries.
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

export default ButterflyKnife;
