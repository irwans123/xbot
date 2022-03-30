const Discord = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

module.exports = {
    name: 'help',
    description: 'Returns bot ping.',
    run: async(client, message, args) => {
      const emoji = message.client.emojis.cache.get('803766094220754954')
  
  const emo = message.client.emojis.cache.get('803842146695643166')
  
  const emoj = message.client.emojis.cache.get ('803840325940019211')
  
  const em = message.client.emojis.cache.get('804089878069116939')
      
         const newEmbed = new Discord.MessageEmbed()
            .setTitle('Help menu')
           .setDescription('This is the help menu, select a button below for that category!')
           .addField(`:ferris_wheel: ┇Fun`,'`wasted`, `avatar`, `animesearch`, `calculate`, `afk`, `covid`, `info`, `snipe`,')
           .addField(`<:info:958432574563295292> ┇ Info`, '`help`, `ping`')
   .addField(`:detective: ┇ Moderation`, '`nuke`, `clear`,')
   .addField(`:key: ┇Prefix`,'`m!help` , `M!help`')
            .setFooter(`${message.author.tag} requested the help menu!`)
            .setTimestamp()
            

        message.channel.send({ embeds: [newEmbed]})
    }
}