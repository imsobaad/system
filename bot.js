const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '#';
client.on('ready', () => {
  console.log(`System Bot is Online`);

});





client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("509810371385884684");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});

 

 

 

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("509812306058805288");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("509810371385884684");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

 channel.send(`**Invited By ${Invite.inviter}. `) ;        

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});







client.login(process.env.BOT_TOKEN);
