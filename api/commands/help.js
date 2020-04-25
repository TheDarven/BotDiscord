const Discord = require("discord.js");

let memberCmd = ["⋄ **blague** | Affiche une blague aléatoire", "⋄ **help** | Pour savoir la liste des commandes (ici héhé)"];
let adminCmd = ["⋄ **say <message>** | Pour envoyer une annonce avec le bot", "⋄ **embed <message>** | Pour envoyer un embed"];

const helpCmd = (args, author, attachment, message) => {
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#77BE7B')
        .setTitle('Commandes')
        // .setURL('https://discord.js.org/')
        // .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('Utilisez **d/**<cmd> pour utiliser une commande.\n')
        // .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addField('Membres', memberCmd.join("\n"))
        .addField('Administrateurs', adminCmd.join("\n"));
        // .addField('Inline field titlee', 'Some value here', true)
        // .setImage('https://i.imgur.com/wSTFkRM.png')
    message.channel.send(exampleEmbed);
};

module.exports=exports=helpCmd;
