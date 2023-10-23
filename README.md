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


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
