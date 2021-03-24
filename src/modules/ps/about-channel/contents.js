const
  gh = "<:github:824400461833699378>",
  tw = "<:twitter:824400461825835068>",
  pt = "<:patreon:824400461754400849>",
  kf = "<:kofi:824400462093615114>",
  ws = "🌐",
  dc = "📋",
  sp = "💫",
  iv = "➕",
  zwsp = "​";  // zero width space

module.exports = [
  "images/promise_solutions.png",
  {
    embed: {
      description: [
        "A small organization making cool projects for educational purposes, and for fun of course.",
        "",
        `> ${ws} Website: [promise.solutions](https://promise.solutions)`,
        `> ${gh} GitHub: [biaw](https://github.com/biaw), [promise](https://github.com/promise)`,
        `> ${pt} Patreon: [patreon.com/promises](https://patreon.com/promises)`,
        `> ${kf} Ko-fi: [ko-fi.com/promise](https://ko-fi.com/promise)`
      ].join("\n")
    },
    navigation: "Promise Solutions"
  },
  "images/server_rules.png",
  {
    embed: {
      fields: [
        {
          "name": "1. Discord ToS and Guidelines",
          "value": "We ask you to follow Discord's [Terms of Service](https://discordapp.com/terms) and [Guidelines](https://discordapp.com/guidelines). If you don't, we are obligated to report you to Discord's Safety Team, and your account may be terminated. These terms and guidelines did you agree on upon making your account on Discord and applies to the whole platform."
        },
        {
          "name": "2. Kindness Policy",
          "value": "It is very important to be nice and kind in real life, so why not be nice here too? If you've been offended in a way on the server, let us know and we can sort it out!"
        },
        {
          "name": "3. Keep the server SFW",
          "value": "This is a support server. Not a porn server. So keep the sauce for yourself ok? Please note; it is also against the Discord Guidelines to send pornography in both DMs (without consent) and also in text channels not marked as NSFW-channels."
        },
        {
          "name": "4. No spam or flood",
          "value": "Making chat unreadable is the worst. If you have a question, send it in one nice simple message. Not ten short ones. And also Don't Do This Please, it's burning my eyes. And don't hoist yourself, it counts as flooding."
        },
        {
          "name": "5. Can-I-get-that Policy",
          "value": "Please do not ask or beg for a rank. A no is a no, and we will probably say no to you the first time. [Rather apply to join us](https://promise.solutions/apply)!"
        },
        {
          "name": "6. Staff DMs' Policy & Pinging for support Policy",
          "value": "Ask us first to send a DM. Never come to DMs for support, we have channels and commands to avoid this. And also, pinging for support is not allowed. Don't expect us to help you right away. While you wait for us, read the documentation and see if you figure it out yourself :)"
        },
        {
          "name": "7. Common Sense",
          "value": "Please..?"
        }
      ]
    },
    navigation: "Server Rules"
  },
  "images/our_projects.png",
  {
    embed: {
      fields: [
        {
          name: "Countr",
          value: [
            "***A counting bot that can manage a counting channel in your guild***",
            "",
            `> ${ws} Website: [countr.xyz](https://countr.xyz)`,
            `> ${dc} Documentation: [docs.countr.xyz](https://docs.countr.xyz)`,
            `> ${sp} Status page: [uptime.countr.xyz](https://uptime.countr.xyz)`,
            `> ${tw} Twitter: [@countrbot](https://twitter.com/countrbot)`,
            `> ${gh} GitHub: [countr/countr](https://github.com/countr/countr)`,
            `> ${iv} Invite: \`c!invite\``
          ]
        },
        {
          name: zwsp,
          value: zwsp
        },
        {
          name: "The Impostor",
          value: [
            "***A simple bot to host Among us-games***",
            "",
            `> ${gh} GitHub: [biaw/the-impostor](https://github.com/biaw/the-impostor)`,
            `> ${iv} Invite: \`im!invite\``
          ],
          inline: true
        },
        {
          name: "YTDL Discord Bot",
          value: [
            "***An example of how to use the ytdl-core package with discord.js***",
            "",
            `> ${gh} GitHub: [promise/ytdl-discord-bot](https://github.com/promise/ytdl-discord-bot)`,
          ],
          inline: true
        },
        {
          name: zwsp,
          value: zwsp
        },
        {
          name: "OutageDiscord",
          value: [
            "***Keeping you posted on Discord's outages***",
            "",
            `> ${tw} Twitter: [@OutageDiscord](https://twitter.com/OutageDiscord)`,
          ],
          inline: true
        },
        {
          name: "Blurple Hammer",
          value: [
            "***An advanced moderation bot for [Project Blurple](https://projectblurple.com)***",
            "",
            `> ${gh} GitHub: [project-blurple/blurple-hammer](https://github.com/project-blurple/blurple-hammer)`,
          ],
          inline: true
        }
      ]
    },
    navigation: "Our projects"
  },
  "images/get_notified.png",
  {
    embed: {
      //description: [
      //  "Get notified when something happens:",
      //  "💠 Server",
      //  "🔢 Countr"
      //].join("\n")
      fields: ["🔢 Countr", "💘 The Impostor", "💥 OutageDiscord", "💠 Server", "🔰 Promise Solutions"].map(name => ({ name, value: zwsp, inline: true })),
      footer: {
        text: "🔔 Click the reactions below to get notified when something cool happens!"
      }
    },
    navigation: "Get notified",
    reactionroles: {
      "🔢": "506085705366110218",
      "💘": "824424292350689300",
      "💥": "619985321949528094",
      "💠": "581902525175693333",
      "🔰": "824424503383556116"
    }
  },
  "images/frequently_asked_questions.png",
  {
    embed: {
      fields: [
        {
          name: "What are these spacers between the roles? Can I get that?",
          value: "We have custom code in our bot. The bot is private, so you'll have to host it yourself. You can find the source code here: [https://github.com/biaw/promise-bot](https://github.com/biaw/promise-bot/blob/master/src/modules/ps/role-spacers.js)"
        }
      ]
    },
    navigation: "Frequently Asked Questions"
  }
]