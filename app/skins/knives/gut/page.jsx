import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/gut.json";

function GutKnife() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Gut Knife Skins</h1>
        <p>
          The most notable feature of a gut knife is the gut hook on the spine
          of the blade. Originally popularized as an aid for field dressing
          game, the gut hook is also effective at cutting through fibrous
          materials like rope, webbing, or safety belts with ease.
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

export default GutKnife;
