//      _________      __________    __________      __________
//     |\        \    /         /   /          \    /         /
//     | \        \  /         /   /            \  /         /
//      \ \        \/         /   /    /\        \/         /
//       \ \                 /   /    /\ \                 /
//        \ \               /   /    /  \ \               /
//        / /               \  /    /   / /               \
//       / /                 \/    /   / /                 \
//      / /        /\             /   / /        /\         \
//     / /        /  \           /   / /        /  \         \
//     \/________/    \_________/    \/________/    \_________\
//
//     __________________________________________________________
//    /|                                                        |
//   | |                                                        |
//   | |________________________________________________________|
//   |/_________________________________________________________/

const { Client, ApplicationCommand, Guild, ApplicationCommandOptionType, PermissionsBitField, PermissionFlagsBits, ClientVoiceManager, ChannelType, TextInputStyle, TextInputBuilder, ModalBuilder, IntentsBitField, messageLink, TimestampStyles, EmbedBuilder, Embed, ActivityType, ActionRowBuilder, ButtonBuilder, ButtonStyle, } = require("discord.js")
const Discord = require("discord.js")
const { Player } = require('discord-player')
const dotenv = require("dotenv")
dotenv.config();

let Bugchannel = "BugChannelId";

let generalchat = "GeneralChatId";

let channelbot = "ChannelBotId";

let warnchannel = "WarnChannelId";

let channelbienvenue = "WelcomeChannelId";

let verifchannel = "VerificationChannelId";

let suggestchannel = "SuggestChannelId";

const moi = "BotCreator(me)";

const XXbot = "BotId";

const modo = "ModoRoleId";

const bumpchannel = "BumpChannelId";

const serveur = "ServerId";

const nmbbot = NumerOfBotInTheServer;

const bantempchannel = "BanTempChannelId";

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildVoiceStates,
    ],
});

client.player = new Player(client, {
    leaveOnEnd: true,
    leaveOnEmpty: true,
    initialVolume: 70,
    ytdlOptions: {
        filter: 'audioonly',
        quality: 'highestaudio',
        highWaterMark: 1 << 25
    }
})
client.player.extractors.loadDefault()

client.on("guildMemberAdd", (member) => {
    console.log("un membre est arrivé")

    member.roles.add("1139520854124933260")


    const nmbhu = member.guild.memberCount - nmbbot

    client.channels.cache.get("1147464376157216829").setName("🤖🗣️ Total member: " + member.guild.memberCount + " 🗣️🤖")
    client.channels.cache.get("1147464498425372716").setName("🗣️ Humain: " + nmbhu + " 🗣️")
    client.channels.cache.get("1147464529777799198").setName("🤖 Bot: " + nmbbot + " 🤖")

});

client.on("guildMemberRemove", (member) => {
    console.log("un membre est partit")

    const nmbhu = member.guild.memberCount - nmbbot


    client.channels.cache.get(channelbienvenue).send("Aurevoir <@" + member.id + ">\nC'est ciao ! Est-ce que c bon pour vous ?")

    client.channels.cache.get("1147464376157216829").setName("🤖🗣️ Total member: " + member.guild.memberCount + " 🗣️🤖")
    client.channels.cache.get("1147464498425372716").setName("🗣️ Humain: " + nmbhu + " 🗣️")
    client.channels.cache.get("1147464529777799198").setName("🤖 Bot: " + nmbbot + " 🤖")

});

console.log("Connexion au bot...");

client.login(process.env.Discord_TOKEN)

    .then(() => console.log("Connecté au bot !"))
    .catch((error) => console.log("Impossible de se connecter au bot - " + error));




let jokes = [
    {
        txt1: "Quelle est la différence entre un robot et du ketchup ?",
        txt2: "Tu ne c'est pas ?",
        txt3: "||Aucune, ils sont tous les deux automates.||",
    },
    {
        txt1: "Une mouette mange un sandwich. Un autre mouette arrive.",
        txt2: "Qu'est-ce qu'elle lui dit ?",
        txt3: "||On fait mouette-mouette ?||",
    },
    {
        txt1: "Qu'est-ce qui est vert et qui se déplace sous l'eau ?",
        txt2: "Tu ne c'est pas ?",
        txt3: "||Un chou marin.||",
    },
    {
        txt1: "J'ai une blagues sur les magasins",
        txt2: "Mais,",
        txt3: "||elle n'a pas supermarché.||",
    },
    {
        txt1: "Que fait une fraise sur le dos d'un cheval ?",
        txt2: "Tu ne c'est pas ?",
        txt3: "||Tagada, Tagada !||",
    },

]

let memes = [
    {
        m1: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjljOWU2ZWNhYzU5MDBkODRmN2VjNGEzMDEyNjg3MWQzNjdlOWMxZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/4pMX5rJ4PYAEM/giphy.gif",
    },
    {
        m1: "https://media.tenor.com/vZFtbQQ0kiEAAAAd/meme-monkey.gif",
    },
    {
        m1: "https://media.tenor.com/scX-kVPwUn8AAAAM/this-is-fine.gif",
    },
    {
        m1: "https://www.wired.com/wp-content/uploads/2014/06/michael-jackson-eating-popcorn.gif",
    },
    {
        m1: "https://media.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif",
    },

]

var ticketsetupembed = new EmbedBuilder()

    .setAuthor({
        name: "X/X's Bot",
        url: "http://xxs-bot.fr.nf",
        icon_url: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
    })
    .setTitle("__Ticket__")
    .setDescription("__Voici le system de tickets du serveur !__\n\nVous avez des questions à poser aux modérateur \nIl vous suffit d'appuyer sur le bouton !\nIl créera un salon où tu pourras parler de tes interrogations au staff.")
    .setThumbnail("https://cdn.discordapp.com/app-assets/1040692763064279140/1137440030550401116.png")
    .setColor("DarkPurple")
    .setFooter({
        text: "X/X's Bot",
        url: "http://xxs-bot.fr.nf",
        iconURL: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
    })

var ticketsetupbutton = new ButtonBuilder()
    .setCustomId("ticketsetupbutton")
    .setLabel("Créer un ticket")
    .setEmoji("🎫")
    .setStyle(ButtonStyle.Secondary)

var ticketsetupactionrow = new ActionRowBuilder()
    .addComponents(ticketsetupbutton)

client.on("ready", async () => {

    // client.channels.cache.get(generalchat).send("Salut @everyone !\nJe suis <@"+XXbot+"> je participe à la vie du serveur et à l'aspect communautaire du serveur si tu as des idées pour m'amélioré\n   /suggestbot\nMerci d'avoir lue ce message et n'oublie pas de respecter les règles du serveur !")

    let status = [
        {
            type: ActivityType.Competing,
            name: "La vie du serveur !",
            url: "https://discord.gg/a6zPQ8zC6f",
            status: "online"
        },
        {
            type: ActivityType.Playing,
            name: "Vous Surveiller !",
            status: "dnd"
        },
    
        {
            type: ActivityType.Listening,
            name: "Vos demandes !",
            status: "idle"
        },
    
        {
            type: ActivityType.Streaming,
            name: "Le résutat de vos commandes !",
            url: "https://twitch.tv/xxgmng",
            status: "online"
        },
    
        {
            type: ActivityType.Watching,
            name: "Youtube|@XX__",
            url: "https://youtube.com/@XX__",
            status: "dnd"
        },
    
        {
            type: ActivityType.Streaming,
            name: "Twitch|xxgmng",
            url: "https://twitch.tv/xxgmng",
            status: "online"
        },
    
        {
            type: ActivityType.Watching,
            name: client.guilds.valueOf().size+" serveurs",
            status:"dnd"
        },
    ];

    const nmbhu = client.guilds.cache.get(serveur).memberCount - nmbbot

    client.channels.cache.get("1147464376157216829").setName("🤖🗣️ Total member: " + client.guilds.cache.get(serveur).memberCount + " 🗣️🤖")
    client.channels.cache.get("1147464498425372716").setName("🗣️ Humain: " + nmbhu + " 🗣️")
    client.channels.cache.get("1147464529777799198").setName("🤖 Bot: " + nmbbot + " 🤖")


    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
        client.user.setStatus(status[random].status);
    }, 10000);

    let phrase = [
        {
            phrase: "Salut !\nJe suis <@" + XXbot + "> je participe à la vie du serveur et à l'aspect communautaire du serveur si tu veux ma doc\n   /doc\nMerci d'avoir lue ce message et n'oublie pas de respecter les règles du serveur !"
        },
        {
            phrase: "Salut !\nJe suis <@" + XXbot + "> je participe à la vie du serveur et à l'aspect communautaire du serveur si tu veux les liens de mon créateur\n   /xx__\nMerci d'avoir lue ce message et n'oublie pas de respecter les règles du serveur !"
        },
        {
            phrase: "Salut !\nJe suis <@" + XXbot + "> je participe à la vie du serveur et à l'aspect communautaire du serveur si tu ne connais pas mes commandes\n   /help\nMerci d'avoir lue ce message et n'oublie pas de respecter les règles du serveur !"
        },
        {
            phrase: "Salut !\nJe suis <@" + XXbot + "> je participe à la vie du serveur et à l'aspect communautaire du serveur si tu as des idées pour m'amélioré\n   /suggestbot\nMerci d'avoir lue ce message et n'oublie pas de respecter les règles du serveur !"
        },
    ]

    setInterval(() => {


        let random = Math.floor(Math.random() * phrase.length);

        const mtn = new Date();

        const hour = mtn.getHours();
        if (hour === 19) {
            client.channels.cache.get(generalchat).send(phrase[random].phrase)
        }
    }, 3600000);


    await client.application.commands.set([
        {
            name: "ping",
            description: "Réponds la latence du bot.",
            category: "Extra"
        },
        {
            name: "help",
            description: "Affiche les commandes du serveur.",
            category: "Informations"
        },
        {
            name: "rules",
            description: "Affiche les règles du serveur.",
            category: "Informations"
        },
        {
            name: "setrules",
            description: "Setup les règles du serveur",
            defaultMemberPermissions: "Administrator"
        },
        {
            name: "protectserv",
            description: "Setup le système de protection du serveur",
            defaultMemberPermissions: "Administrator"
        },
        {
            name: "setuprolemodo",
            description: "Setup le système de autorole pour devenir modo du serveur",
            defaultMemberPermissions: "Administrator"
        },
        {
            name: "setupvoicechannelcreator",
            description: "Setup le système de protection du serveur",
            defaultMemberPermissions: "Administrator"
        },
        {
            name: "jokes",
            description: "Fait une blague.",
            category: "Humour"
        },
        {
            name: "memes",
            description: "Envoie un meme.",
            category: "Humour"
        },
        {
            name: "clear",
            description: "Supprime un nombre de message(s)",
            defaultMemberPermissions: "ManageMessages",
            category: "Modération",
            options: [
                {
                    type: ApplicationCommandOptionType.Number,
                    name: "nombre",
                    description: "Nombre de message(s) que vous voulez supprimer",
                    required: true
                }
            ]
        },
        {
            name: "startbump",
            description: "Envoie un DM à quelqu'un pour l'informer d'un début de bump intensif",
            defaultMemberPermissions: "Administrator",
            category: "Modération",
            options: [
                {
                    type: ApplicationCommandOptionType.User,
                    name: "utilisateur",
                    description: "Mentionnez l'utilisateur que vous voulez DM",
                    required: true
                }
            ],

        },
        {
            name: "bug",
            description: "Envoie le bug au modo pour qui le règle",
            category: "Modération",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "bug",
                    description: "Expliquez le bug que vous voulez régler.",
                    required: true
                }
            ],

        },
        {
            name: "suggestbot",
            description: "Envoie une suggestion pour le XX's Bot",
            category: "Modération",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "suggestion",
                    description: "Expliquez le bug que vous voulez régler.",
                    required: true
                }
            ],

        },
        {
            name: "doc",
            description: "Affiche la doc du bot.",
            category: "Informations"
        },
        {
            name: "xx__",
            description: "Envoie tout les liens reliés à X/X",
            category: "Informations"
        },
        {
            name: "youtube",
            description: "Envoie toutes les chaînes youtube reliés a X/X",
            category: "Informations"
        },
        {
            name: "twitch",
            description: "Envoie toutes les chaînes twitch reliés a X/X",
            category: "Informations"
        },
        {
            name: "kick",
            description: "Envoie toutes les chaînes kick reliés a X/X",
            category: "Informations"
        },
        {
            name: "discord",
            description: "Envoie le lien du Discord",
            category: "Informations"
        },
        {
            name: "excs",
            description: "Envoie le lien du Discord de EXCS ainsi que le lien du sitte",
            category: "Informations"
        },
        {
            name: "infoserv",
            description: "Envoie les informations du serveur Discord",
            category: "Informations"
        },
        {
            name: "bantemp",
            defaultMemberPermissions: "BanMembers",
            category: "Modération",
            type: 2,
        },
        {
            name: "report user",
            category: "Modération",
            type: 2,
        },
        {
            name: "report message",
            category: "Modération",
            type: 3,
        },
        {
            name: "warn",
            description: "Warnez un utilisateur",
            category: "Modérations",
            options: [
                {
                    type: ApplicationCommandOptionType.User,
                    name: "utilisateur",
                    description: "Mentionnez l'utilisateur que vous voulez warn",
                    required: true
                },
            ]
        },
        {
            name: "addrole",
            description: "Ajouter un role à un utilisateur",
            defaultMemberPermissions: "ManageRoles",
            category: "Modérations",
            options: [
                {
                    type: ApplicationCommandOptionType.User,
                    name: "utilisateur",
                    description: "Mentionnez l'utilisateur à qui vous voulez ajouter un rôle",
                    required: true
                },
                {
                    type: ApplicationCommandOptionType.Role,
                    name: "role",
                    description: "Mentionnez le rôle que vous voulez ajouter à l'utilisateur",
                    required: true
                },
            ]
        },
        {
            name: "infos",
            description: "Envoie des infos sur un utilisateur",
            category: "Informations",
            options: [
                {
                    type: ApplicationCommandOptionType.User,
                    name: "utilisateur",
                    description: "Mentionnez l'utilisateur dont vous voulez des infos",
                    required: true
                },
            ]
        },
        {
            name: "play",
            description: "Joue une musique",
            category: "Fun",
            options: [
                {
                    type: ApplicationCommandOptionType.String,
                    name: "musique",
                    description: "Musique que vous voulez jouer",
                    required: true
                },
                {
                    type: ApplicationCommandOptionType.Channel,
                    name: "salon",
                    description: "Salon dans lequel vous voulez jouer",
                    required: true
                },
            ]
        },
        {
            name: "ticket-setup",
            description: "Setup le system de ticket",
            defaultMemberPermissions: "Administrator",
            category: "Modérations",
        },
    ]);
    console.log(client.application.commands.valueOf().size + " commandes enregistrés")
    console.log("Le bot est prêt !");
});

client.on("interactionCreate", async (interaction) => {

    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping") {

        const ping = client.ws.ping;

        interaction.reply("Pong!\nLa latence de l'API est `" + ping + "`ms.");

    }
    else if (interaction.commandName === "help") {
        if (interaction.memberPermissions.has("Administrator")) {
            interaction.reply({ content: "Mes commandes sont : \n     /help\n     /doc\n     /ping\n     /rules\n     /jokes\n     /bug\n     /clear\n     /memes\n     /bantemp\n     /startbump", ephemeral: true })
        }
        else if (interaction.memberPermissions.has("BanMembers")) {
            interaction.reply({ content: "Mes commandes sont : \n     /help\n     /doc\n     /ping\n     /rules\n     /jokes\n     /bug\n     /clear\n     /memes\n     /bantemp", ephemeral: true })
        }
        else if (interaction.memberPermissions.has("ManageMessages")) {
            interaction.reply({ content: "Mes commandes sont : \n     /help\n     /doc\n     /ping\n     /rules\n     /jokes\n     /bug\n     /clear\n     /memes", ephemeral: true })
        }
        else {
            interaction.reply("Mes commandes sont : \n     /help\n     /doc\n     /ping\n     /rules\n     /jokes\n     /bug\n     /memes")
        }
    }
    else if (interaction.commandName === "rules") {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: "X/X's Bot",
                url: "http://xxs-bot.fr.nf",
                iconURL: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
            })
            .setTitle("Règles du serveur __" + interaction.guild.name + "__")
            .addFields(
                { name: "1. Traiter tout le monde avec respect", value: "Aucun harcèlement, chasse aux sorcières, sexisme, racisme ou discours de haine ne sera toléré." },
                { name: "2. Pas de contenu obscène ou soumis à une limite d'âge", value: "Qu'il s'agisse de texte, d'images ou de liens mettant en scène de la nudité, du sexe, de l'hyperviolence ou tout autre contenu explicite perturbant." },
                { name: "3. Si tu remarques quelque chose de contraire aux règles ou qui te met dans un sentiment d'insécurité", value: "Informe-en les modérateurs." },
                { name: "4. Pas de spam ni d'autopromotion", value: "(invitations de serveurs, publicités, etc.), sans l'autorisation d'un modérateur du serveur, y compris via les MP envoyés aux autres membres." },
                { name: "5. Ne répandez pas de fakenews", value: "Ou autres forme de propagande." },
                { name: "Si ces règles ne sont  pas respecter vous serez sanctionné !", value: "L'équipe de modération" },
            )
            .setThumbnail(interaction.guild.iconURL())

        interaction.reply({ embeds: [embed] });
    }
    else if (interaction.commandName === "setrules") {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: "X/X's Bot",
                url: "http://xxs-bot.fr.nf",
                iconURL: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
            })
            .setTitle("Règles du serveur __" + interaction.guild.name + "__")
            .addFields(
                { name: "1. Traiter tout le monde avec respect", value: "Aucun harcèlement, chasse aux sorcières, sexisme, racisme ou discours de haine ne sera toléré." },
                { name: "2. Pas de contenu obscène ou soumis à une limite d'âge", value: "Qu'il s'agisse de texte, d'images ou de liens mettant en scène de la nudité, du sexe, de l'hyperviolence ou tout autre contenu explicite perturbant." },
                { name: "3. Si tu remarques quelque chose de contraire aux règles ou qui te met dans un sentiment d'insécurité", value: "Informe-en les modérateurs." },
                { name: "4. Pas de spam ni d'autopromotion", value: "(invitations de serveurs, publicités, etc.), sans l'autorisation d'un modérateur du serveur, y compris via les MP envoyés aux autres membres." },
                { name: "5. Ne répandez pas de fakenews", value: "Ou autres forme de propagande." },
                { name: "Si ces règles ne sont  pas respecter vous serez sanctionné !", value: "L'équipe de modération" },
            )
            .setThumbnail(interaction.guild.iconURL())

        interaction.reply({ embeds: [embed], ephemeral: true });
    }
    else if (interaction.commandName === "protectserv") {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: "X/X's Bot",
                url: "http://xxs-bot.fr.nf",
                iconURL: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
            })
            .setTitle("Règles du serveur __" + interaction.guild.name + "__")
            .addFields(
                { name: "1. Traiter tout le monde avec respect", value: "Aucun harcèlement, chasse aux sorcières, sexisme, racisme ou discours de haine ne sera toléré." },
                { name: "2. Pas de contenu obscène ou soumis à une limite d'âge", value: "Qu'il s'agisse de texte, d'images ou de liens mettant en scène de la nudité, du sexe, de l'hyperviolence ou tout autre contenu explicite perturbant." },
                { name: "3. Si tu remarques quelque chose de contraire aux règles ou qui te met dans un sentiment d'insécurité", value: "Informe-en les modérateurs." },
                { name: "4. Pas de spam ni d'autopromotion", value: "(invitations de serveurs, publicités, etc.), sans l'autorisation d'un modérateur du serveur, y compris via les MP envoyés aux autres membres." },
                { name: "5. Ne répandez pas de fakenews", value: "Ou autres forme de propagande." },
                { name: "Si ces règles ne sont  pas respecter vous serez sanctionné !", value: "L'équipe de modération" },
                { name: "Cliquer sur le bouton vert pour accéder au serveur !", value: "Et surtout profitez de celui-ci !" },
            )
            .setThumbnail(interaction.guild.iconURL())

        const btn = new ButtonBuilder()
            .setCustomId("verifie")
            .setLabel("Accepter le réglement du serveur")
            .setEmoji("✅")
            .setStyle(ButtonStyle.Success)

        const row = new ActionRowBuilder().addComponents(btn)

        interaction.reply({ embeds: [embed], components: [row] })
    }
    else if (interaction.commandName === "setuprolemodo") {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: "X/X's Bot",
                url: "http://xxs-bot.fr.nf",
                iconURL: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
            })
            .setTitle("Devenir "+interaction.guild.roles.cache.get(modo).name+" sur __" + interaction.guild.name + "__")
            .addFields(
                { name: "C'est une tâche", value: "Qui ne demande que peu ou pas d'expérience car vous serez formé" },
                { name: "Les qualités nécessaires sont :", value: "L'Abnégation, La Disponibilité, Savoir quoi faire dans chaque situation sans paniquer, Savoir être ferme mais pas trop ..." },
                { name: "Merci de venir nous aider dans cette tâche !", value: "_L'équipe de modération_" },
                { name: "Cliquer sur le bouton ci-dessous pour avoir accès a un googla form !", value: "Qui vous permettra de finir votre demande celle-ci sera examinée par le staff." },
            )
            .setThumbnail(interaction.guild.iconURL())

        const btn = new ButtonBuilder()
            .setCustomId("devenir-modo")
            .setLabel("Devenir Modo")
            .setEmoji("⚔️")
            .setStyle(ButtonStyle.Primary)

        const row = new ActionRowBuilder().addComponents(btn)

        interaction.reply({ embeds: [embed], components: [row] })
    }
    else if (interaction.commandName === "setupvoicechannelcreator") {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: "X/X's Bot",
                url: "http://xxs-bot.fr.nf",
                iconURL: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
            })
            .setTitle("Salon Temporaire du serveur __" + interaction.guild.name + "__")
            .addFields(
                { name: "Salut toi tu veux créer un salon temporaire ?", value: "Pour celà clique sur le bouton ci-dessous" },
            )
            .setThumbnail(interaction.guild.iconURL())

        const btn = new ButtonBuilder()
            .setCustomId("créé_salon")
            .setLabel("Créer un salon vocal tempo")
            .setEmoji("🔉")
            .setStyle(ButtonStyle.Primary)

        const row = new ActionRowBuilder().addComponents(btn)

        interaction.reply({ embeds: [embed], components: [row] })
    }
    else if (interaction.commandName === "memes") {
        let randomm = Math.floor(Math.random() * memes.length);

        interaction.reply(memes[randomm].m1)
    }
    else if (interaction.commandName === "jokes") {
        let randomj = Math.floor(Math.random() * jokes.length);

        interaction.reply(jokes[randomj].txt1)
        interaction.channel.send(jokes[randomj].txt2)
        interaction.channel.send(jokes[randomj].txt3)
    }
    else if (interaction.commandName === "startbump") {
        if (interaction.memberPermissions.has("Administrator")) {
            var options = interaction.options.getMember("utilisateur");
            let user = options;
            user.send("Eh ça va ?\nUn bump intensif viens de commencer dans le salon <#" + bumpchannel + ">\nViens y participer pour aider le serveur.")
            interaction.reply("Le message à bien été envoyer à <@" + user + ">.")
        }
        else {
            interaction.reply({ content: "Tu n'as pas les perms", ephemeral: true })
        }
    }
    else if (interaction.commandName === "clear") {
        if (interaction.memberPermissions.has("ManageMessages")) {
            let options = interaction.options.getNumber("nombre");
            let Number = options;
            interaction.reply({ content: Number + " message(s) ont bien été suprimé(s)", ephemeral: true })
            interaction.channel.bulkDelete(Number)
        }
        else {
            interaction.reply({ content: "Tu n'as pas les perms", ephemeral: true, })
        }
    }
    else if (interaction.commandName === "bug") {
        let options1 = interaction.options.getString("bug");
        let bug = options1;
        interaction.reply({ content: "Message tansmis aux modo", ephemeral: true })
        client.channels.cache.get(Bugchannel).send("<@" + interaction.member.id + "> a rapporté un bug:\n \n" + bug + "\n \nDans <#" + interaction.channelId + ">\n----------------------------------------------------------------------------------------------");

    }
    else if (interaction.commandName === "play") {
    }
    else if (interaction.commandName === "suggestbot") {
        let options1 = interaction.options.getString("suggestion");
        let suggest = options1;
        interaction.reply({ content: "Message tansmis à <@" + moi + "> !", ephemeral: true })
        client.channels.cache.get(suggestchannel).send("<@" + interaction.member.id + "> a suggéré :\n \n" + suggest + "\n \nPour ammélioré le XX's Bot !\n \nDans <#" + interaction.channelId + ">\n----------------------------------------------------------------------------------------------");

    }
    else if (interaction.commandName === "doc") {
        interaction.reply({ content: "Voici la doc du Bot:\nhttp://xxs-bot.fr.nf", ephemeral: true })
    }
    else if (interaction.commandName === "xx__") {
        interaction.reply({ content: "Tous les liens des réseaux sociaux de X/X:\nhttps://alllinks-xx.netlify.app/", ephemeral: true })
    }
    else if (interaction.commandName === "youtube") {
        interaction.reply({ content: "Les chaînes Youtubes de X/X:\nYoutube humour : http://xxcorp.fr.nf\n Youtube gaming : http://ytb-gmng.xxcorp.fr.nf \n Youtube Codage : http://ytb-coding.xxcorp.fr.nf", ephemeral: true })
    }
    else if (interaction.commandName === "twitch") {
        interaction.reply({ content: "Chaîne Twitch de X/X:\nhttp://twitch.xxcorp.fr.nf", ephemeral: true })
    }
    else if (interaction.commandName === "kick") {
        interaction.reply({ content: "Chaine Kick de X/X:\nhttp://kick.xxcorp.fr.nf", ephemeral: true })
    }
    else if (interaction.commandName === "discord") {
        interaction.reply({ content: "Le serveur Discord de X/X:\nhttp://discord.xxcorp.fr.nf", ephemeral: true })
    }
    else if (interaction.commandName === "excs") {
        interaction.reply({ content: "Le serveur Discord de EXCS:\nhttp://discord.excs.fr.nf\nLe site de EXCS:\nhttp://excs.fr.nf", ephemeral: true })
    }
    else if (interaction.commandName === "infoserv") {


        const nmbhu = interaction.guild.memberCount - nmbbot

        const infoembed = new EmbedBuilder()
            .setAuthor({
                name: "X/X's Bot",
                url: "http://xxs-bot.fr.nf",
                iconURL: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
            })
            .setThumbnail(interaction.guild.iconURL())
            .setTitle("Infos sur __" + interaction.guild.name + "__")
            .addFields(
                { name: "Date de création du serveur :", value: "`" + interaction.guild.createdAt + "`" },
                { name: "Propriétaire du serveur :", value: "<@" + interaction.guild.ownerId + ">" },
                { name: "Nombre d'utilisateur du serveur :", value: "`" + nmbhu + "`" },
                { name: "Nombre de bot du serveur :", value: "`" + nmbbot + "`" },
            )
            .setTimestamp(Date.now())

        interaction.reply({ embeds: [infoembed], ephemeral: true })
    }
    else if (interaction.commandName === "infos") {
        let options = interaction.options.getUser("utilisateur");
        let user = options;
        let ub = user.bot;
        let roles = interaction.guild.roles.cache.get(member.roles).id;
        let rslice = roles.slice();
        let nmbr = rslice.valueOf()
        let member = interaction.guild.members.cache.get(user);
        let join = member.joinedAt.toLocaleString()

        const infoembed = new EmbedBuilder()
            .setAuthor({
                name: user.username,
                url: "https://discord.com/users/" + user.id,
                iconURL: user.displayAvatarURL(),
            })
            .setThumbnail(user.displayAvatarURL())
            .setTitle(user.username + "'s infos")
            .addFields(
                { name: "Utilisateur de discord depuis :", value: "`" + user.createdAt.toLocaleString() + "`" },
                { name: "Utilisateur du serveur depuis :", value: "`" + join + "`" },
                { name: "Role(s) [" + nmbr + "]", value: "<@" + roles + ">", inline: true },
                { name: "ID de l'utilisateur :", value: "`" + user.id + "`" },
                { name: "L'utilisateur est un bot ?:", value: "`" + ub + "`" },
            )
            .setFooter({
                text: "Demandé par " + interaction.member.displayName + " | " + Date.now(),
                iconURL: interaction.member.displayAvatarURL(),
            })
        interaction.reply({ embeds: [infoembed], ephemeral: true })
    }
    else if (interaction.commandName === "warn") {
        let options = interaction.options.getUser("utilisateur");
        let user = options;
        client.channels.cache.get(warnchannel).send(`${user} a été warn par: \n \n${interaction.member}\n----------------------------------------------------------------------------------------------`);
        interaction.reply({ content: `${user} à bien été warn`, ephemeral: true })
    }
    else if (interaction.commandName === "addrole") {
        let options1 = interaction.options.getUser("utilisateur");
        let options2 = interaction.options.getRole("role");

        let user = options1;
        let role = options2;
        interaction.guild.members.cache.get(user).roles.add(role)
        interaction.reply({ content: `Le role:${role} a bien été à ${user}`, ephemeral: true })
    }
    else if (interaction.commandName === "ticket-setup") {
        if (interaction.memberPermissions.has("Administrator")) {
            interaction.reply({ embeds: [ticketsetupembed], components: [ticketsetupactionrow] })
        }
        else {
            interaction.reply({ content: "Tu n'as pas les perms", ephemeral: true, })
        }
    }

});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isUserContextMenuCommand) return;

    if (interaction.commandName === "bantemp") {
        if (interaction.memberPermissions.has("BanMembers")) {

            client.channels.cache.get(bantempchannel).send(`${interaction.targetMember} a été bannis temporairement par: \n \n<@${interaction.member.id}>\n----------------------------------------------------------------------------------------------`);
            interaction.reply({ content: `${interaction.targetMember} à bien été temporairement bannis`, ephemeral: true })
            interaction.targetMember.send(`Salut ${interaction.targetMember}\nTu as été temporairement bannis, ne quitte pas le serveur, l'équipe de modération va examiner ton cas.\nJ'espère que ce ne soit pas une erreur.`)
            interaction.targetMember.roles.add("1144636110518112286")
            interaction.targetMember.roles.remove("969901312718303274")
            interaction.guild.channels.create({

                name: `${interaction.targetMember.username}-bannissement-temporaire`,
                type: Discord.ChannelType.GuildText,
                parent: "1172601695046467584",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: interaction.member.id,
                        allow: [PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: interaction.member.id,
                        allow: [PermissionsBitField.Flags.SendMessages],
                    },
                    {
                        id: "970239140153143356",
                        allow: [PermissionsBitField.Flags.ViewChannel],
                    },
                ]
            })
        }
        else {
            interaction.reply({ content: "Tu n'as pas le perms", ephemeral: true })
        }
    }
    else if (interaction.commandName === "report user") {
        client.channels.cache.get(warnchannel).send(`${interaction.targetMember} a été warn par: \n \n<@${interaction.member.id}>\n----------------------------------------------------------------------------------------------`);
        interaction.reply({ content: `${interaction.targetMember} à bien été warn`, ephemeral: true })
    }
})

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isMessageContextMenuCommand) return;


    else if (interaction.commandName === "report message") {
        client.channels.cache.get(warnchannel).send("Le message `" + interaction.targetMessage.content + "` écris par <@" + interaction.targetMessage.author + ">, dans: <#" + interaction.targetMessage.channel + ">, écris le `" + interaction.targetMessage.createdAt + "`, a été warn par: \n \n<@" + interaction.member.id + ">\n----------------------------------------------------------------------------------------------");
        interaction.reply({ content: `Le message "${interaction.targetMessage.content}" écris par ${interaction.targetMessage.author}, à bien été warn`, ephemeral: true })
    }
})
client.on("channelUpdate", async (channel) => {
    console.log(channel.name)
})



client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton) return;

    if (interaction.customId === "verifie") {
        interaction.member.roles.remove("1139520854124933260")
        interaction.member.roles.add("969901312718303274")
        client.channels.cache.get(channelbienvenue).send("Salut <@" + interaction.member.id + ">\nNous te souhaitons une bienvenue dans le serveur !")
        interaction.member.send("Salut <@" + member.id + ">\nNous te souhaitons une bienvenue dans le serveur __" + interaction.guild.name + "__ !")
    }

    else if (interaction.customId === "créé_salon") {
        const channel = interaction.guild.channels.create({
            name: "Salon de " + interaction.member.displayName,
            parent: "1174304262919041115",
            userLimit: 10,
            type: Discord.ChannelType.GuildVoice,
        });
    }

    else if (interaction.customId === "devenir-modo") {
        interaction.member.roles.add("1013150781890899969")
        interaction.member.send("Voici le lien du google form pour devenr un véritable modo:\n      https://forms.gle/9FoKaW6XmuMyjARY6")
        interaction.reply({content:"Voici le lien du google form pour devenr un véritable modo:\n      https://forms.gle/9FoKaW6XmuMyjARY6", ephemeral: true})
    }
    else if (interaction.customId === "ticket-close-button") {
        interaction.channel.delete()
        interaction.member.send("Salut <@" + member.id + ">\nTon ticket a bien été suprimé !")
    }

    else if (interaction.customId === "ticket-ping-button") {
        interaction.channel.send("<@970239140153143356> <@1165773519204909197>")
    }

    else if (interaction.customId == "ticketsetupbutton") {
        const modalticket = new ModalBuilder()
            .setCustomId("modal-ticket")
            .setTitle("Créer le ticket")

        const topicinput = new TextInputBuilder()
            .setCustomId("topic-input")
            .setLabel("Sujet du ticket")
            .setStyle(TextInputStyle.Short)
            .setPlaceholder("Pourquoi faites vous ce ticket ?")
            .setMinLength(1)
            .setMaxLength(25)
            .setRequired(true)

        const issueinput = new TextInputBuilder()
            .setCustomId("issue-input")
            .setLabel("Comment vous aidez ?")
            .setStyle(TextInputStyle.Short)
            .setPlaceholder("Comment peut-on vous aidez ?")
            .setMinLength(15)
            .setMaxLength(250)
            .setRequired(true)

        const ActionRow1 = new ActionRowBuilder().addComponents(topicinput);
        const ActionRow2 = new ActionRowBuilder().addComponents(issueinput);

        modalticket.addComponents(ActionRow1, ActionRow2);

        interaction.showModal(modalticket);

    }

    else if (interaction.isModalSubmit()) {

        const sujet = interaction.fields.getTextInputValue("topic-input");
        const aider = interaction.fields.getTextInputValue("issue-input");

        var channelcreateticket = interaction.guild.channels.create({

            name: `${interaction.user.username}-ticket`,
            type: Discord.ChannelType.GuildText,
            parent: "1137704140450050160",
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.member.id,
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: "970239140153143356",
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
            ]
        });
        const ticketembed2 = new EmbedBuilder()
            .setAuthor({
                name: "X/X's Bot",
                url: "http://xxs-bot.fr.nf",
                icon_url: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
            })
            .setTitle("__Ticket crée !__")
            .setDescription("Les modérateurs et les admins vont arrivée")
            .setThumbnail("https://cdn.discordapp.com/app-assets/1040692763064279140/1137440030550401116.png")
            .setColor("DarkPurple")
            .addFields(
                { name: "Utilisateur", value: interaction.user.username },
                { name: "Sujet", value: sujet },
                { name: "Comment vous aidez", value: aider }
            )
            .setFooter({
                text: "X/X's Bot",
                url: "http://xxs-bot.fr.nf",
                iconURL: "https://cdn.discordapp.com/app-assets/1040692763064279140/1100006804378882069.png",
            })

        const ticketclosebutton = new ButtonBuilder()
            .setCustomId("ticket-close-button")
            .setLabel("Fermer le ticket")
            .setEmoji("🔐")
            .setStyle(ButtonStyle.Danger)

        const ticketpingbutton = new ButtonBuilder()
            .setCustomId("ticket-ping-button")
            .setLabel("Ping les modérateurs et les admins")
            .setEmoji("📌")
            .setStyle(ButtonStyle.Primary)

        const ticketcloserow = new ActionRowBuilder().addComponents(ticketclosebutton);
        const ticketpingrow = new ActionRowBuilder().addComponents(ticketpingbutton);
        const channel = interaction.guild.channels.cache.get(channelcreateticket);
        const user = interaction.user

        // user.send("Le ticket " + channel + " à bien été créer !")

        // interaction.reply({ content: "<@" + interaction.user.id + "> votre ticket a bien été créer " + channel, ephemeral: true })

        // channel.send({embeds:[ticketembed2],components:[ticketcloserow][ticketpingrow]})

    }

});


client.on("messageCreate", async (message) => {

    if (message.author.bot) return;

    client.channels.cache.get(channelbot).send("<@" + message.author.id + "> a dit:\n \n" + message.content + "\n \nDans <#" + message.channel + ">\n----------------------------------------------------------------------------------------------");

});

client.on("channelCreate", (channel) => {
    client.channels.cache.get(channelbot).send("Le salon <#" + channel.id + "> a été créé dans la catégorie <#" + channel.parentId + ">\n----------------------------------------------------------------------------------------------");
});

client.on("inviteCreate", (invite) => {
    if (invite.temporary === true) {
        client.channels.cache.get(channelbot).send("L'invitation " + invite.url + " a été créée\nPar <@" + invite.inviterId + ">\nPour le salon: <#" + invite.channelId + "> qui est dans la catégorie <#" + invite.channel.parentId + ">\nCrèation :`" + invite.createdAt.toLocaleString() + "`| Expiration : `" + invite.expiresAt.toLocaleString() + "`\n Nombre maximum d'utilisation : `" + invite.maxUses + "`\n----------------------------------------------------------------------------------------------");
    }
    else if (invite.temporary === false) {
        client.channels.cache.get(channelbot).send("L'invitation " + invite.url + " a été créée\nPar <@" + invite.inviterId + ">\nPour le salon: <#" + invite.channelId + "> qui est dans la catégorie <#" + invite.channel.parentId + ">\nCrèation :`" + invite.createdAt.toLocaleString() + "`| Expiration : `Jamais`\n Nombre maximum d'utilisation : `" + invite.maxUses + "`\n----------------------------------------------------------------------------------------------");
    }
});

client.on("roleCreate", (role) => {
    client.channels.cache.get(channelbot).send("Le role <@" + role.id + "> a été créé.\nDate : `" + role.createdAt.toLocaleString() + "`\nPermissions : " + role.permissions + "\nCouleur `#" + role.hexColor + "`\n----------------------------------------------------------------------------------------------")
})
