require('dotenv').config();

const Discord = require("discord.js");
const bot = new Discord.Client();

const commands = require("./api/commands");
const folders = require("./modules/folders");

const TOKEN = process.env.TOKEN;

bot.on("ready", () => {
   console.log("Je suis connecté !");
    bot.user.setActivity('d/', { type: 'PLAYING' });
    folders(["files"]);
});

bot.on("message", message => {
    commands(message);
});

bot.login(TOKEN);
