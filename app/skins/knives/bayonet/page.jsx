import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/bayonet.json";

function Bayonet() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Bayonet Skins</h1>
        <p>
          Relatively unchanged in its design since World War II, the bayonet
          still retains a place in modern military strategy. Bayonet charges
          have continued to be effective as recently as the second Gulf War and
          the war in Afghanistan.
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

export default Bayonet;
