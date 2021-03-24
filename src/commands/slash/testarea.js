module.exports = {
  description: "Manage testing areas.",
  options: [
    {
      type: 1,
      name: "create",
      description: "Create a test area",
      options: [
        {
          type: 3,
          name: "name",
          description: "Name of the testing area",
          required: true
        }
      ]
    },
    {
      type: 1,
      name: "list",
      description: "List all the testing areas"
    },
    {
      type: 1,
      name: "remove",
      description: "Remove a testing area, or this testing area if ran inside one",
      options: [
        {
          type: 3,
          name: "guild_id",
          description: "The guild ID of the testing area"
        }
      ]
    }
  ]
};

const { testareas } = require("../../database"), { getPermissionLevel } = require("../../constants"), config = require("../../../config.json");

module.exports.run = async (send, { member, client, guild }, { create, list, remove }, interaction) => {
  const mainMember = client.guilds.cache.get(config.mainGuild).members.cache.get(member.user.id);
  if (!mainMember) return;

  const permissionLevel = getPermissionLevel(mainMember);

  if (permissionLevel < 4) return send({ type: 4, data: { content: "❌ You don't have permission to do this.", flags: 64 } });

  if (create) {
    if (client.guilds.cache.size == 10) return send({ type: 4, data: { content: "❌ I can't create more guilds as a bot user, please delete unused test areas first." }});
    await send({ type: 5 });

    const newGuild = await client.guilds.create(create.name, {
      channels: [
        {
          name: "general",
          type: "text",
          id: 1
        },
        {
          name: "Toggle Administrator",
          type: "voice",
          id: 2
        },
        {
          name: "Test Area",
          type: "category",
          id: 0
        },
        ...Array(10).fill(true).map((_, i) => ({
          name: `test-channel-${i + 1}`,
          type: "text",
          parentID: 0
        }))
      ],
      systemChannelID: 1,
      defaultMessageNotifications: "MENTIONS",
      roles: [
        {
          name: "everyone",
          id: 3
        },
        {
          name: "Administrator",
          permissions: [ "ADMINISTRATOR" ],
          color: 0xFF0000,
          hoist: true,
          id: 4
        }
      ]
    });

    const newInvite = await newGuild.channels.cache.find(ch => ch.name == "general").createInvite({ maxAge: 0 });
    testareas.set(newGuild.id, {
      code: newInvite.code,
      adminrole: newGuild.roles.cache.find(r => r.name == "Administrator").id,
      toggleadmin: newGuild.channels.cache.find(ch => ch.name == "Toggle Administrator").id,
      owner: member.user.id,
      deletable: true
    });

    return client.api.webhooks(client.user.id, interaction.token).messages['@original'].patch({ data: { content: `✅ Successfully created a test area for you. Here's an invite: https://discord.gg/${newInvite.code}/` }});
  } else if (list) {
    const areas = await testareas.get(), areaList = Object.keys(areas).filter(gid => client.guilds.cache.get(gid));
    if (!areaList.length) return send({ type: 4, data: { content: "❌ There's not any test areas." }});
    else return send({ type: 4, data: { content: [
      `📋 ${areaList.length}/${10 - client.guilds.cache.size + areaList.length} test areas available:`,
      ...areaList.map(gid =>
        `• \`${gid}\`: **${client.guilds.cache.get(gid).name}** (${client.guilds.cache.get(gid).memberCount}) [<https://discord.gg/${areas[gid].code}>]`
      )
    ].join("\n")}});
  } else if (remove) {
    const guildid = remove.guild_id || guild;
    const testarea = await testareas.get(guildid), testguild = client.guilds.cache.get(guildid);
    if (!testarea || !testguild) return send({ type: 4, data: { content: "❌ This test area doesn't exist." }});
    if (!testarea.deletable) return send({ type: 4, data: { content: "❌ You can't delete this test area." }});

    await testguild.delete();
    return send({ type: 4, data: { content: "✅ The test area has been deleted successfully." }});
  }
};

// create, list, join, remove