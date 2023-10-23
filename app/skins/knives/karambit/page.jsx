import "../../../style/skins_page_style.css";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/Card/page";
import Weapon from "../../../json_api/knives/karambit.json";

function Karambit() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div className="skins-container">
        <h1>Karambit Skins</h1>
        <p>
          With its curved blade mimicking a tigers claw, the karambit was
          developed as part of the southeast Asian martial discipline of silat.
          The knife is typically used with a reverse grip, with the finger ring
          on the index finger.
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

export default Karambit;
