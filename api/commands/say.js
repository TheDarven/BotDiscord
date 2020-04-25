const download = require("../download");

let fileCounter = 0;

const sayCmd = async (args, author, attachment, message) => {
    if (!author.hasPermission("ADMINISTRATOR") || args.length === 0)
        return;

    if (attachment === null)
        message.channel.send(args.join(" "));
    else {
        fileCounter = (fileCounter + 1) % 10;
        let filePath = 'files/sayFile' + fileCounter + '.' + attachment[1];
        let file = await download(attachment[0], filePath);
        message.channel.send(args.join(" "), {files: [filePath]});
    }
    message.delete();
};

module.exports=exports=sayCmd;
