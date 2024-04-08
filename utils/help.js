function sendBasicHelp (){
    return [
        { name: 'server', value: 'Utilitaires de gestion du serveur' },
        { name: 'perso',  value: 'Utilitaires autour du développement personnel' },
        { name: 'utils',  value: 'Utilitaires divers disponibles sur ce serveur' },
        { name: 'money',  value: 'Commandes autour de la finance disponibles sur ce serveur' },
        { name: 'info',   value: 'Commandes autour de l\'informatique disponibles sur ce serveur' },
        { name: 'text',   value: 'Commandes textuelles disponibles sur ce serveur' },
        { name: 'math',   value: 'Commandes mathématiques disponibles sur ce serveur' },
        { name: 'fun',    value: 'Commandes fun disponibles sur ce serveur' }
    ]
}

function sendSpecificHelp (argument){
    if (argument === 'server')
        return [
            { name: 'ping', value: 'Obtention d\'un retour avec temps de latence, permet de tester le service' },
            { name: 'invite <bot/user>', value: 'Obtention d\'un lien permettant d\'inviter le bot sur son serveur (Option: bot) ou un lien d\'invitation pour le serveur sur lequel le bot est actif' },
            { name: 'question <question/proposition1 + proposition2 +...>', value: 'Permet de créer un sondage simple sans options, ou avec des choix multiples (Options : choix séparées par un signe +' }
        ]
    else if (argument === 'perso')
        return [
            { name: 'proverbe', value: 'Obtention d\'un proverbe aléatoire parmi près de 2500 proverbes d\'origine différentes' },
            { name: 'advice', value: 'Obtention d\'un conseil aléatoire (anglais)' }
        ]
    else if (argument === 'utils')
        return [
            { name: 'date <format>', value: 'Obtention de la date du jour (Options : gregoire / hegire)' },
            { name: 'convert <nombre> <origine>', value: 'Conversion d\'une unité (Options : gr / oz / lb / kg / st / inch / ft / yd / cm / km / mile / celsius / farenheit)' }
        ]
    else if (argument === 'money')
        return [
            { name: 'change <monnaie_origine> <monnaie_destination>', value : 'Conversion (cours du jour) d\'une monnaie donnée dans une monnaie d\'arrivée (Options : sigles monétaires, tels USD, GBP, EUR,...' }
    ]
    else if (argument === 'info')
        return [
            { name: 'domaine <mot>', value: 'Obtention d\'une liste de domaines Internet suggérée en fonction d\'un mot donné' }
    ]
    else if (argument === 'text')
        return [
            { name: 'wiki <search/suggestions> <mot>', value: 'Obtention du lien de recherche (Option: search) ou des suggestions Wikipedia (Option: suggestions) pour un mot donné. NB. Pour le moment, le service ne fonctionne qu\'avec un seul mot recherché' },
            { name: 'trad <mot> <origine> <destination>', value: 'Traduction d\'un mot d\'une langue à une autre (Options : fr / en / ar / zh / de / hi / id / ga / it / ja / ko / pl / pt / ru / tr / vi / es)' }
        ]
    else if (argument === 'math')
        return [
            { name: 'nombre <nombre>', value: 'Obtention d\'un fait aléatoire à propos d\'un nombre donné, en anglais (Si aucun nombre n\'est donné, un fait est donné à propos d\'un nombre aléatoire )' },
            { name: 'convert <nombre> <origine> <destination>', value: 'Conversion d\'un nombre (Options : binary / octal / decimal / hexadecimal)' }
        ]
    else return [
        { name: 'Erreur de syntaxe !', value : 'L\'argument que tu as renseigné n\'existe pas...'}
    ]
}


module.exports = {
    sendBasicHelp,
    sendSpecificHelp
}
