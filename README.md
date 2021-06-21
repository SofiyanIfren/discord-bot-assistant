# Assistant Personnel - Bot Discord

## Assistant Personnel - Guide d'installation

* Installation npm et packages nécessaires

<code>npm init
npm i --save  discord.js ytdl-core ffmpeg fluent-ffmpeg ffmpeg-static @discordjs/opus ytdl-core</code>

* Créer un fichier config.json à la racine du projet

<code>{
    "BOT_TOKEN": "<DISCORD_BOT_TOKEN>",
    "WEATHER_API_KEY": "<API_KEY_OPENWEATHERMAP>"
}</code>

## Assistant Personnel - Liste des fonctionnalités

* <code>!ping</code> Obtention d'un retour avec temps de latence, permet de tester le service
* <code>!proverbe</code> Obtention d'un proverbe à léatoire parmi près de 2500 proverbes d'origine différentes
* <code>!convert <number> <from> <to></code> Conversion d'un nombre (Options : binary / octal / decimal / hexadecimal)
* <code>!date <format></code> Obtention de la date du jour (Options : gregorian / hijri)
* <code>!weather <city_name></code> Obtention de la météo (température extérieure) d'une ville donnée, en °C et °F

