const { SlashCommandBuilder } = require('discord.js');
const { minecraft_ip } = require('./config.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Replies with the minecaft server ip!'),
    async execute(interaction) {
        await interaction.reply(minecraft_ip);
    },
};
