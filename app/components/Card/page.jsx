import "../Card/Card.css";
import Image from "next/image";

function Card({ weapon }) {
  if (!weapon || !weapon.weapon) {
    return null;
  }

  return (
    <div className="card_container">
      <div className="card">
        <div className="weapon_image">
          <Image
            className="weapon_img"
            src={weapon.image || ""}
            alt="weapon-image"
            width={350}
            height={300}
          />
        </div>
        <div className="weapon_name">
          <h1>{weapon.weapon.name}</h1>
          <h1>{weapon.pattern.name}</h1>
        </div>
        <div className="weapon_collections">
          {weapon.collections &&
            weapon.collections.map((collection) => (
              <p key={collection.id}>{collection.name}</p>
            ))}
        </div>
        <div className="hr_line"></div>
        <div className="weapon_details">
          <div className="left_panel">
            <p>Category: {weapon.category.name}</p>
            <p>Rarity: {weapon.rarity.name}</p>
            <p>StatTrak Available: {weapon.stattrak ? "Yes" : "No"}</p>
          </div>
          <div className="right_panel">
            <p>Min Float: {weapon.min_float}</p>
            <p>Max Float: {weapon.max_float}</p>
            <p>Souvenir Available: {weapon.souvenir ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
