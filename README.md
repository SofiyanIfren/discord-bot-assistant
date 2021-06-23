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
* <code>!date <format></code> Obtention de la date du jour (Options : gregoire / hegire)
* <code>!weather <nom_ville></code> Obtention de la météo (température extérieure) d'une ville donnée, en °C et °F
* <code>!wiki <search/suggestions> <mot></code> Obtention du lien de recherche (Option: search) ou des suggestions Wikipedia (Option: suggestions) pour un mot donné. NB. Pour le moment, le service ne fonctionne qu'avec un seul mot recherché
* <code>!domaine <mot></code> Obtention d'une liste de domaines suggérée en fonction d'un mot donné
* <code>!chat</code> Obtention d'une image de chat aléatoire
* <code>!anime</code> Obtention d'une citation aléatoire d'anime, en anglais
* <code>!nombre <nombre></code> Obtention d'un fait aléatoire à propos d'un nombre donné, en anglais (Si aucun nombre n'est donné, un fait est donné à propos d'un nombre aléatoire )
* <code>!convert <nombre> <origine></code> Conversion d'une unité (Options : gr / oz / lb / kg / st / inch / ft / yd / cm / km / mile / celsius / farenheit)
* <code>!convert <nombre> <origine> <destination></code> Conversion d'un nombre (Options : binary / octal / decimal / hexadecimal)
* <code>!trad <mot> <origine> <destination></code> Traduction d'un mot d'une langue à une autre (Options : fr / en / ar / zh / de / hi / id / ga / it / ja / ko / pl / pt / ru / tr / vi / es)
* <code>!advice</code> Obtention d'un conseil aléatoire (anglais)
* <code>!lofi <play/stop></code> Lance de la musique lofi dans l'espace de coworking (chanel vocal)
* <code>!change <monnaie_origine> <monnaie_destination></code> Conversion (cours du jour) d'une monnaie donnée dans une monnaie d'arrivée (Options : sigles monétaires, tels USD, GBP, EUR,...

