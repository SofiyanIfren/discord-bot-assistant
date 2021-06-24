# Assistant Personnel - Bot Discord

## Assistant Personnel - Guide d'installation

* Installation npm et packages nécessaires

<code>npm init
npm i --save  discord.js ytdl-core ffmpeg fluent-ffmpeg ffmpeg-static @discordjs/opus ytdl-core</code>

* Créer un fichier config.json à la racine du projet et y ajouter les informations nécessaires. Pour l'obtention des clefs d'API, voir les url dans les crédits ci-dessous. TEXT_CHANNEL_NAME et VOCAL_CHANNEL_NAME sont à remplacer respectivement par le nom des chaînes sur lesquels vous souhaitez que le bot réponde.

<code>{
    "BOT_TOKEN": "<DISCORD_BOT_TOKEN>",
    "BOT_ID": "<DISCORD_BOT_TOKEN>",
    "TEXT_CHANNEL": "<TEXT_CHANNEL_NAME>",
    "VOCAL_CHANNEL": "<VOCAL_CHANNEL_NAME>",
    "WEATHER_API_KEY": "<API_KEY_OPENWEATHERMAP>"
}</code>

## Assistant Personnel - Liste des fonctionnalités

### Gestion du serveur

* <code>!ping</code> Obtention d'un retour avec temps de latence, permet de tester le service
* <code>!invite <bot/user></code> Obtention d'un lien permettant d'inviter le bot sur son serveur (Option: bot) ou un lien d'invitation pour le serveur sur lequel le bot est actif

### Dev perso

* <code>!proverbe</code> Obtention d'un proverbe à léatoire parmi près de 2500 proverbes d'origine différentes
* <code>!advice</code> Obtention d'un conseil aléatoire (anglais)

### Utilitaires

* <code>!date <format></code> Obtention de la date du jour (Options : gregoire / hegire)
* <code>!weather <nom_ville></code> Obtention de la météo (température extérieure) d'une ville donnée, en °C et °F
* <code>!convert <nombre> <origine></code> Conversion d'une unité (Options : gr / oz / lb / kg / st / inch / ft / yd / cm / km / mile / celsius / farenheit)

### Finances

* <code>!change <monnaie_origine> <monnaie_destination></code> Conversion (cours du jour) d'une monnaie donnée dans une monnaie d'arrivée (Options : sigles monétaires, tels USD, GBP, EUR,...

### Informatique

* <code>!domaine <mot></code> Obtention d'une liste de domaines suggérée en fonction d'un mot donné

### Recherche texte

* <code>!wiki <search/suggestions> <mot></code> Obtention du lien de recherche (Option: search) ou des suggestions Wikipedia (Option: suggestions) pour un mot donné. NB. Pour le moment, le service ne fonctionne qu'avec un seul mot recherché
* <code>!trad <mot> <origine> <destination></code> Traduction d'un mot d'une langue à une autre (Options : fr / en / ar / zh / de / hi / id / ga / it / ja / ko / pl / pt / ru / tr / vi / es)

### Maths

* <code>!nombre <nombre></code> Obtention d'un fait aléatoire à propos d'un nombre donné, en anglais (Si aucun nombre n'est donné, un fait est donné à propos d'un nombre aléatoire )
* <code>!convert <nombre> <origine> <destination></code> Conversion d'un nombre (Options : binary / octal / decimal / hexadecimal)


### Fun

* <code>!anime</code> Obtention d'une citation aléatoire d'anime, en anglais
* <code>!chat</code> Obtention d'une image de chat aléatoire

### Ambiance Coworking

* <code>!lofi <play/stop></code> Lance de la musique lofi dans l'espace de coworking (chanel vocal)

## Crédits - API utilisées

* https://animechan.vercel.app/api
* http://api.aladhan.com/v1
* https://api.domainsdb.info/v1
* http://numbersapi.com/
* https://libretranslate.de/translate
* https://api.openweathermap.org
* https://fr.wikipedia.org/w/api.php
* https://thatcopy.pw/catapi/rest/
* https://api.adviceslip.com/advice
* https://www.frankfurter.app/

