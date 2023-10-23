import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/pistol/revolverR8.json";

function Revolver() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>R8 Revolver Skins</h1>
        <p>
          The R8 Revolver delivers a highly accurate and powerful round at the
          expense of a lengthy trigger-pull. Firing rapidly by fanning the
          hammer may be the best option when point-blank stopping power is
          required.
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

export default Revolver;
