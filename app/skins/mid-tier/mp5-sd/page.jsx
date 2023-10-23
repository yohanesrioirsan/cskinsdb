import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/smg/mp5.json";

function Mp5() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>MP5-SD Skins</h1>
        <p>
          Often imitated but never equaled, the iconic MP5 is perhaps the most
          versatile and popular SMG in the world. This SD variant features an
          integrated silencer, making an already formidable weapon
          whisper-quiet.
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

export default Mp5;
