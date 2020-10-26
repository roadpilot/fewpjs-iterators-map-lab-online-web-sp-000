const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(function (title) {
    let words = title.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = (words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    return words.join(' ');
  });
}
