const Discord = require("discord.js");

const embedCmd = async (args, author, attachment, message) => {
    if (!author.hasPermission("ADMINISTRATOR") || args.length === 0)
        return;

    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        // .setTitle('Annonce')
        // .setURL('https://discord.js.org/')
        // .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        //.setDescription('Some description here')
        // .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addField('𝘈𝘯𝘯𝘰𝘯𝘤𝘦', args.join(" "))
        // .addField('Inline field titlee', 'Some value here', true)
        // .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter(author.user.username, author.user.avatarURL);

    message.channel.send(embed);
    message.delete();
};

module.exports=exports=embedCmd;
