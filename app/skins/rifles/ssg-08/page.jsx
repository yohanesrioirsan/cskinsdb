import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/rifles/ssg08.json";

function Ssg08() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>SSG-08 Skins</h1>
        <p>
          The SSG08 bolt-action is a low-damage but very cost-effective sniper
          rifle, making it a smart choice for early-round long-range
          marksmanship.
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

export default Ssg08;
