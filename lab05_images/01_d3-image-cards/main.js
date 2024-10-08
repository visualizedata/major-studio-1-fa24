d3.json('./data.json')
  .then(json => {
    // execute the display images function
    displayImages(json);
  });

// function to create all DOM elements
function displayImages(json) {
  // select a <div> with an id of "app"; this is where all images will be added
  let app = d3.select('#app');

  // sort the JSON data; date descending
  let data = json.sort((a, b) => (b.date > a.date) ? 1 : -1);
  // date ascending
  // let data = json.sort((a, b) => (a.date > b.date) ? 1 : -1);

  // define "cards" for each item
  let card = app.selectAll('div.card')
    .data(data)
    .join('div')
    .attr('class', 'card');

  // create a div with a class of "image" and populate it with an <img/> tag that contains the filepath
  card.append('div')
    .attr('class', 'image')
    .append('img')
    .attr('src', d => {
      // all images are in the "images" folder which needs to be added to the filename
      return './images/' + d.filename;
    });

  // create a paragraph that will hold the object date
  card.append('p')
    .attr('class', 'object-date')
    .text(d => d.date);

  // create a heading tag that will be the object title
  card.append('h2')
    .attr('class', 'title')
    .text(d => d.title);
}