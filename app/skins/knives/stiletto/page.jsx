import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/stiletto.json";

function StilettoKnife() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Stiletto Knife Skins</h1>
        <p>
          Historically a focal point of contention and even regulation, this
          Italian-style stiletto switchblade knife features a spring-loaded
          blade that can be deployed almost instantly with the push of a release
          catch.
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

export default StilettoKnife;
