// With fetch, async, and await.
// const fetchText = async (url) => {
//   const response = await fetch(url);
//   return await response.text();
// };
// fetchText(csvUrl).then(text => {
//   const data = d3.csvParse(text);
//   let message = '';
//   message = message + Math.round(text.length / 1024) + ' kB\n';
//   message = message + data.length + ' rows\n';
//   message = message + data.columns.length + ' columns';
//   document.getElementById('message-container').textContent = message;
// });

// Pyramid of Doom.
// fetch(url).then(response => {
//   response.text().then(text => {
//     console.log(text);
//   });
// });
