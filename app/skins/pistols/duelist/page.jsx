import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/pistol/dualBarretas.json";

function Duelist() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Dual Berettas Skins</h1>
        <p>
          Firing two large-mag Berettas at once will lower accuracy and increase
          load times. On the bright side, you will get to fire two large-mag
          Berettas at once.
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

export default Duelist;
