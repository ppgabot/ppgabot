const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = ";"


Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `LG UHC | NL-CORP`, type: 0} });
});


Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);

	if (command === "say") {
	if (message.member.hasPermission("MANAGE_MESSAGES"))
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(args.join(" "));
		message.channel.send({embed})
	} else

	if (message.content === prefix + `efef`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("")
            .setFooter("Copyright 2018 © PP GA")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    if (message)
    
    if (message.content === prefix + `info`){
        message.delete()
        var help_embed = new Discord.RichEmbed()
            .setDescription("Informations du Discord")
            .addField("Nom du discord", message.guild.name)
            .addField("Utilisateurs sur le discord", message.guild.memberCount)
            .setFooter("Copyright 2019 © NLCORP")
            .setColor("RANDOM")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    if (message.content === prefix + `formulaire`){
        message.delete()
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":white_check_mark: Validation :", "Un **LG UHC** va être mis en place demain aux alentours de __15 heures__.")
            .setFooter("Copyright 2019 © NLCORP")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }
	
    if (message.content === prefix + `formulaire`){
        message.delete()
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":white_check_mark: Inscription :", "http://lunys.fr/nlcorp.html")
            .setFooter("Copyright 2019 © NLCORP")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

});

Client.login(process.env.TOKEN);
