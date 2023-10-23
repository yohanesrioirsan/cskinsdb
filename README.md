# Introduction
Unofficial Open-Source Counter-Strike 2 Weapon Skins Showcase Website. I created this because I enjoy the game Counter-Strike and the skin culture in that game, even though there are many similar websites out there with better features, I am happy to have created this website myself.

# Credit
<p>Special thanks to <a href="https://github.com/ByMykel/CSGO-API"><b>ByMykel</b></a> For CS Skins API</p>

# JSON Filter
because I want to put the JSON file locally, therefore I filter the JSON data according to the existing skin using the JavaScript filter code below :

    const data_json = JSON.parse(data);
    const filtered_data = [];

    for (let i = 0; i < data_json.length; i++) {
      if (
        data_json[i].weapon &&
        data_json[i].weapon.id === "weapon_knife_ursus" &&
        data_json[i].weapon.name === "Ursus Knife"
        // data filtered by its weapon_id and weapon_name based on the JSON files
      ) {
        filtered_data.push(data_json[i]);
      }
    }

If you have further suggestions, please contact me. Star is highly appreciated. Thank You.

