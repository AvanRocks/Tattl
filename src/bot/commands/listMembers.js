const Discord = require("discord.js");
const db = require("../../db");
const sendPaginatedMsg = require("../utils/sendPaginatedMsg");
const { table } = require("table");

async function listMembers(msg) {
  const dbRes = await db.query("SELECT name, discordName FROM user_accounts");

  const members = dbRes.rows;
  const membersData = [];
  members.forEach((member) => {
    membersData.push([member.name, member.discordname]);
  });

  const header = ["Name", "Discord username"];

  const options = {
    entriesPerPage: 10,
    tabular: {
      header: header,
    },
  };

  await sendPaginatedMsg(msg, membersData, options);

  /*
  const data = [];
  members.forEach((member, index) => {
    if (index % rowsPerPage === 0) data.push([]);
    let lastPage = data[data.length - 1];
    lastPage.push([member.name, member.discordname]);
  });

  const header = ["Name", "Discord username"];
  let tabularData = [];
  data.forEach((page) => {
    page.unshift(header);
    tabularData.push(table(page));
  });

  let embeds = [];
  tabularData.forEach((table) => {
    embeds.push(
      new Discord.MessageEmbed().addField("Members", `\`\`\`${table}\`\`\``)
    );
  });

  paginationEmbed(msg, embeds);
  */
}

module.exports = {
  name: "listMembers",
  description: "List all users registered with accountability bot",
  execute: listMembers,
  numArgs: 0,
};
