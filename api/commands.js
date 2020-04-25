const sayCmd = require("./commands/say");
const embedCmd = require("./commands/embed");
const helpCmd = require("./commands/help");
const blagueCmd = require("./commands/blague");

async function commands(message){
    let author = message.guild.member(message.author.id);
    if(author.user.bot)
        return;
    let splitedMessage = split(message.content);
    if(splitedMessage === null)
        return;
    let cmd = splitedMessage[0];
    let args = splitedMessage[1];

    let attachment = getAttachment(message);

    switch(cmd){
        case "blague":
            blagueCmd(args, author, attachment, message);
            break;
        case "help":
            helpCmd(args, author, attachment, message);
            break;

        case "embed":
            embedCmd(args, author, attachment, message);
            break;
        case "say":
            sayCmd(args, author, attachment, message);
            break;
    }
}

function split(content){
    let args = content.split(/ +/);
    if(args[0].startsWith("d/") && args[0] !== "d/") {
        args[0] = args[0].replace("d/", "");
        return [args[0], args.splice(1, args.length)];
    }
    return null;
}

function getAttachment(message){
    let attachment = message.attachments.array();
    if(!attachment.length > 0)
        return null;

    attachment = attachment[0];
    let extension = attachment.name.split(".");
    extension = extension[extension.length-1];

    return [attachment.proxyURL, extension];
}

module.exports=exports=commands;
