const { MessageActionRow, MessageButton } = require("discord-buttons");
const { table } = require("table");

function paginateData(data, entriesPerPage) {
  const pagedData = [];
  data.forEach((entry, index) => {
    if (index % entriesPerPage === 0) pagedData.push([]);
    const lastPage = pagedData[pagedData.length - 1];
    lastPage.push(entry);
  });

  return pagedData;
}

function makeDataTabular(pagedData, tabular) {
  const tabularPagedData = [];
  const header = tabular.header;
  pagedData.forEach((page) => {
    page.unshift(header);
    tabularPagedData.push(table(page));
  });

  return tabularPagedData;
}

function makeDataMonospace(data) {
  return `\`\`\`${data}\`\`\``;
}

async function sendPaginatedMsg(msg, data, options) {
  const { tabular, entriesPerPage } = options;

  const row = new MessageActionRow();

  const backButton = new MessageButton()
    //.setLabel("Back")
    .setEmoji("👈")
    .setStyle("blurple")
    .setID("back");

  const nextButton = new MessageButton()
    //.setLabel("Next")
    .setEmoji("👉")
    .setStyle("blurple")
    .setID("next");

  row.addComponent(backButton).addComponent(nextButton);

  let pagedData = paginateData(data, entriesPerPage);

  let finalPagedData = null;
  if (tabular) {
    finalPagedData = makeDataTabular(pagedData, tabular);
  } else {
    const stringPagedData = [];
    pagedData.forEach((page) => {
      stringPagedData.push(page.join("\n"));
    });

    finalPagedData = stringPagedData;
  }

  finalPagedData.forEach((page, index) => {
    finalPagedData[index] = makeDataMonospace(page);
  });

  let index = 0;

  const message = await msg.channel.send(
    finalPagedData[index] + `Page ${index + 1}/${finalPagedData.length}`,
    {
      component: row,
    }
  );

  const filter = (button) => button.clicker.user.id === msg.author.id;
  const collector = message.createButtonCollector(filter, { time: 60 * 1000 });

  collector.on("collect", async (button) => {
    await button.defer();

    if (button.id === "back") {
      index--;
    } else if (button.id === "next") {
      index++;
    }

    if (index < 0) index = finalPagedData.length - 1;
    if (index >= finalPagedData.length) index = 0;

    message.edit(
      finalPagedData[index] + `Page ${index + 1}/${finalPagedData.length}`
    );
  });

  // delete buttons after timeout
  collector.on("end", (collected) => {
    message.edit(finalPagedData[index], { components: [] });
  });
}

module.exports = sendPaginatedMsg;
