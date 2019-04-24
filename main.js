const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = ";"


Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `;commandes | PP GA`, type: 0} });
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
            .setFooter("Copyright 2019 © PP GA")
            .setColor("RANDOM")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    if (message.content === prefix + `ppga`){
        message.delete()
        var help_embed = new Discord.RichEmbed()
            .setDescription("Informations des Admins")
            .addField("Twitter Kace :", "@KaceCM")
            .addField("Twitter Falconly :", "@Falconly_")
            .setFooter("Copyright 2019 © PP GA")
            .setColor("RANDOM")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }
    
    if (message.content === prefix + `commandes`){
        message.delete()
        var help_embed = new Discord.RichEmbed()
            .setColor("#35CEB1")
            .addField(":computer: Commandes Joueurs :", "  \n \n **;ppga** ! Sert à te donner les réseaux sociaux de Kace et Falconly ! \n   \n **;info** : Sert à voir le nombres d'utilisateurs connecté sur le discord ! \n     \n **;addcommande** : Sert à améliorer le serveur ! \n")
            .setFooter("Copyright 2019 © PP GA")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }
	
	    if (message.content === prefix + `commandes`){
            message.delete()
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":computer: Commandes Staff :", "  \n   \n **;ban** : Sert à bannir les personnes ! \n   \n **;kick** : Sert à expulser des personnes ! \n   \n **;warn** : Sert à avertir des personnes !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
	}

	
	   if (message.content === prefix + `warn`){
        message.delete()
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":computer: Warn (Staff) :", "``Vous navez pas les autorisations nécessaire !``")
            .setFooter("Copyright 2019 © PP GA")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    if (message.content === prefix + `addcommande`){
        message.delete()
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":white_check_mark: Validation (Ci-dessous) :", "``Veuillez décrire la futur commande que vous voulez ajouter et le nom de la commande``")
            .addField(":white_check_mark: Validé :", "``Votre commande sera pris en compte sous peu.``")
            .setFooter("Copyright 2019 © PP GA")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

});

Client.login(process.env.TOKEN);
