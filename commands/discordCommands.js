const INVITE_BOT_LINK = 'https://discord.com/oauth2/authorize?client_id=520534231387078676&permissions=8&scope=bot'

function sendBotInvitation (){
    return INVITE_BOT_LINK
}

async function sendServerInvitation (message){
    let invitation = ''
    await message.channel.createInvite()
        .then(invite =>  invitation = `https://discord.gg/${invite.code}`)
    return invitation
}

module.exports = {
    sendBotInvitation,
    sendServerInvitation
    
}