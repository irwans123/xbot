const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('clear')
  .setDescription('clear an amount of message')
  .addIntegerOption((option) => {
    return option
    .setName('amount')
    .setDescription('amount of message to delete')
    .setRequired(true)
  }),
  async execute(client, interaction){
    if(!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.reply({ content: `You don't have premission`})

if(!interaction.guild.me.permissions.has('MANAGE_MESSAGES')) return interaction.reply({ content: `I don't have premission`})

    let amount = interaction.options.getInteger('amount')

    if(isNaN(amount)){
      return interaction.reply({ content: '**Please specify a valid amount between 1 - 100!**', ephemeral: true })
    }

    if(parseInt(amount) > 99){
      return interaction.reply({ content: '**I can only delete 99 message once!**', ephemeral: true })
    } else {
        try{
          let { size } = await interaction.channel.bulkDelete(amount)
          await interaction.reply({ content: `Deleted ${size} message.`, ephemeral: true })
        } catch(e) {
          console.log(e)
          interaction.reply({ content: `I cannont delete messages thst is older that 14 day`, ephemeral: true })
        }
    }
  }
}