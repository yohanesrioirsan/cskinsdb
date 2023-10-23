import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/classic.json";

function ClassicKnife() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Classic Knife Skins</h1>
        <p>
          A classic of the Counter-Strike series, the edge of this knife is
          press-fit Stellite perfectly held in place due to its precise fit with
          the titanium on the blades cheek and spine. The handle is fossilized
          mastodon ivory held in a carbon fibre pocket.
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

export default ClassicKnife;
