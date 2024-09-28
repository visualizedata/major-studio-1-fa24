/*
RiTa.js reference:
https://rednoise.org/rita/reference/index.php
*/

// our input text
const textData = `Somewhere over the rainbow, way up high There's a land that I heard of once in a lullaby Somewhere over the rainbow, skies are blue And the dreams that you dare to dream Really do come true Someday I'll wish upon a star And wake up where the clouds are far behind me Where troubles melt like lemon drops Away above the chimney tops That's where you'll find me Somewhere over the rainbow Bluebirds fly Birds fly over the rainbow Why, then, oh, why can't I? If happy little bluebirds fly Beyond the rainbow Why, oh, why can't I?`;

processRita(textData);

function processRita(input) {
  // change our input to a Rita string
  const rs = new RiString(input);

  // break our phrase into words:
  const words = rs.words();
  console.log(words);

  // get part-of-speech tags
  // part-of-speech tags list: https://rednoise.org/rita/reference/RiTa/pos/index.html
  const pos = rs.pos();
  console.log(pos);

  // app is the html element we are writing into
  const app = d3.select('#app');

  // let's go through all words
  words.forEach((word, i) => {
    // let's make one span per word
    const span = app.append('span').text(word);

    // if the word is a noun, let's attach the class "noun"
    if (['nn', 'nns', 'nnp', 'nnps'].includes(pos[i])) {
      span.attr('class', 'noun highlight');
    // if the word is a verb, attach the class "verb"
    } else if (pos[i] === 'vb') {
      span.attr('class', 'verb highlight');
    // if the word is an adjective, attach the class "adjective"
    } else if (['jj', 'jjr', 'jjs'].includes(pos[i])) {
      span.attr('class', 'adjective highlight');
    }

    // by placing each word into an array separately we have lost the white spaces, let's add them back
    if (!RiTa.isPunctuation(pos[i + 1])) {
      app.append('span').text(' ');
    }
  });
}

// Exercise:
// Combine RiTa text processing with word frequency analysis to create a visualization that shows the frequency of different parts of speech in a text. 