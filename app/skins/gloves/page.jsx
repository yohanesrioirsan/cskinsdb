import "../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../json_api/gloves/gloves.json";

function Gloves() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>All Glove Skins</h1>
        <p>
          Gloves are an element of clothing added in Counter-Strike: Global
          Offensive part of November 28, 2016 Update. This feature allows player
          to visually change the gloves their player characters wear.
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

export default Gloves;
