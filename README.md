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
* <code>!date <format></code> Obtention de la date du jour (Options : gregorian / hijri)
* <code>!weather <city_name></code> Obtention de la météo (température extérieure) d'une ville donnée, en °C et °F
* <code>!wiki <search/suggestions> <searched_word></code> Obtention du lien de recherche (Option: search) ou des suggestions Wikipedia (Option: suggestions) pour un mot donné. NB. Pour le moment, le service ne fonctionne qu'avec un seul mot recherché
* <code>!domains <searched_word></code> Obtention d'une liste de domaines suggérée en fonction d'un mot donné
* <code>!cat <searched_word></code> Obtention d'une image de chat aléatoire
* <code>!anime <searched_word></code> Obtention d'une citation aléatoire d'anime, en anglais
* <code>!number <searched_word></code> Obtention d'un fait aléatoire à propos d'un nombre donné, en anglais (Si aucun nombre n'est donné, un fait est donné à propos d'un nombre aléatoire )
* <code>!convert <number> <from></code> Conversion d'une unité (Options : gr / oz / lb / kg / st / inch / ft / yd / cm / km / mile / celsius / farenheit)
* <code>!convert <number> <from> <to></code> Conversion d'un nombre (Options : binary / octal / decimal / hexadecimal)
* <code>!trad <word> <from> <to></code> Traduction d'un mot d'une langue à une autre (Options : fr / en / ar / zh / de / hi / id / ga / it / ja / ko / pl / pt / ru / tr / vi / es)
* <code>!advice</code> Obtention d'un conseil aléatoire (anglais)
* <code>!lofi <play/stop></code> Lance de la musique lofi dans l'espace de coworking (chanel vocal)

