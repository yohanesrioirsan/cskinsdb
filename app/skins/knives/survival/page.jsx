import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/survival.json";

function SurvivalKnife() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Survival Knife Skins</h1>
        <p>
          This multi-purpose tactical knife features a serrated edge for ripping
          through coarse material like bone or fiber, plus a sharp gutting hook.
          The composite material handle is bolted to the blade with hex nuts.
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

export default SurvivalKnife;
