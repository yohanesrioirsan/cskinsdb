import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/huntsman.json";

function HuntsmanKnife() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Huntsman Knife Skins</h1>
        <p>
          A knife designed for modern tactical uses, the blade is well suited
          for a range of both combat and utilitarian needs. The unique Tanto
          point allows for maximum penetration through even the toughest of
          surfaces.
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

export default HuntsmanKnife;
