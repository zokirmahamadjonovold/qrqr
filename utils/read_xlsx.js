var xlsx = require('node-xlsx');

async function readXlsx(from) {
  const obj = await xlsx.parse(__dirname + '/../uploads/' + from); // parses a file
  const data = obj[0].data;
  const result = [];
  for (let i of data) {
    result.push(i.join(','));
  }
  return result;
}

module.exports = { readXlsx };
