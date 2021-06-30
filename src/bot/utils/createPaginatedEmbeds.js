/*
const Discord = require("discord.js");
const paginationEmbed = require("discord.js-pagination");
const { table } = require("table");

function createPaginatedEmbeds(options) {
  const { data, pageTitle, rowsPerPage, tabular } = options;

  const pagedData = [];
  data.forEach((entry, index) => {
    if (index % rowsPerPage === 0) pagedData.push([]);
    const lastPage = pagedData[pagedData.length - 1];
    lastPage.push(entry);
  });

  let finalData;
  if (tabular) {
    const header = tabular.header;
    const tabularPagedData = [];
    pagedData.forEach((page) => {
      page.unshift(header);
      tabularPagedData.push(table(page));
    });

    finalData = tabularPagedData;
  } else {
    const stringPagedData = [];
    pagedData.forEach((page) => {
      stringPagedData.push(page.join("\n"));
    });

    finalData = stringPagedData;
  }
  console.log(finalData);

  let embeds = [];
  finalData.forEach((page) => {
    embeds.push(
      new Discord.MessageEmbed().addField(pageTitle, `\`\`\`${page}\`\`\``)
    );
  });
  console.log(embeds);

  return embeds;
}

module.exports = createPaginatedEmbeds;

*/
