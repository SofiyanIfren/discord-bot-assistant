function sendBasicHelp (){
    return "utilisation: *** !help <argument> ***\n\nVoici une liste des arguments possibles:\n\n"
        +"*** server *** (Gestion du serveur)\n"
        +"*** perso  *** (Autour du développement personnel)\n"
        +"*** utils  *** (Utilitaires divers disponibles sur ce serveur)\n"
        +"*** money  *** (Commandes autour de la finance disponibles sur ce serveur)\n"
        +"*** info   *** (Commandes autour de l'informatique disponibles sur ce serveur)\n"
        +"*** text   *** (Commandes textuelles disponibles sur ce serveur)\n"
        +"*** math   *** (Commandes mathématiques disponibles sur ce serveur)\n"
        +"*** fun    *** (Commandes fun disponibles sur ce serveur)\n"
        +"*** sound  *** (Commandes liées au son disponibles sur ce serveur)\n"
}

function sendSpecificHelp (argument){
    let response = ''
    if (argument === 'server')
        return "*** !ping *** \n --> Obtention d'un retour avec temps de latence, permet de tester le service\n"
            +"*** !invite <bot/user> *** \n --> Obtention d'un lien permettant d'inviter le bot sur son serveur (Option: bot) ou un lien d'invitation pour le serveur sur lequel le bot est actif"
    if (argument === 'perso')
        return "*** !proverbe *** \n --> Obtention d'un proverbe à léatoire parmi près de 2500 proverbes d'origine différentes\n"
            +"*** !advice *** \n --> Obtention d'un conseil aléatoire (anglais)\n"
    if (argument === 'utils')
        return "*** !date <format> *** \n --> Obtention de la date du jour (Options : gregoire / hegire)\n"
            +"*** !meteo <nom_ville> *** \n --> Obtention de la météo (température extérieure) d'une ville donnée, en °C et °F\n"
            +"*** !convert <nombre> <origine> *** \n --> Conversion d'une unité (Options : gr / oz / lb / kg / st / inch / ft / yd / cm / km / mile / celsius / farenheit)\n"
    if (argument === 'money')
        return "*** !change <monnaie_origine> <monnaie_destination> *** Conversion (cours du jour) d'une monnaie donnée dans une monnaie d'arrivée (Options : sigles monétaires, tels USD, GBP, EUR,...\n"
    if (argument === 'info')
        return "*** !domaine <mot> *** \n --> Obtention d'une liste de domaines Internet suggérée en fonction d'un mot donné\n"
    if (argument === 'text')
        return "*** !wiki <search/suggestions> <mot> *** \n --> Obtention du lien de recherche (Option: search) ou des suggestions Wikipedia (Option: suggestions) pour un mot donné. NB. Pour le moment, le service ne fonctionne qu'avec un seul mot recherché\n"
            +"*** !trad <mot> <origine> <destination> *** \n --> Traduction d'un mot d'une langue à une autre (Options : fr / en / ar / zh / de / hi / id / ga / it / ja / ko / pl / pt / ru / tr / vi / es)\n"
    if (argument === 'math')
        return "*** !nombre <nombre> *** \n --> Obtention d'un fait aléatoire à propos d'un nombre donné, en anglais (Si aucun nombre n'est donné, un fait est donné à propos d'un nombre aléatoire )\n"
            +"*** !convert <nombre> <origine> <destination> *** \n --> Conversion d'un nombre (Options : binary / octal / decimal / hexadecimal)\n"
    if (argument === 'fun')
        return "*** !chat *** \n --> Obtention d'une image de chat aléatoire\n"
            +"*** !anime *** \n --> Obtention d'une citation aléatoire d'anime, en anglais\n"
    if (argument === 'sound')
        return "*** !lofi <play/stop> *** \n --> Lance de la musique lofi dans l'espace de coworking (chanel vocal)\n"
}


module.exports = {
    sendBasicHelp,
    sendSpecificHelp
}
