const title = document.querySelector('h1');
const cityInput = document.querySelector('.weather-card input');
const cityInputPlaceholder = cityInput.getAttribute('placeholder');

// Remove the placeholder text when the input has focus
cityInput.addEventListener('focus', (event) => {
  cityInput.removeAttribute('placeholder');
});

// Return the placeholder text to its initial value when the input loses focus
cityInput.addEventListener('focusout', (event) => {
  cityInput.setAttribute('placeholder', cityInputPlaceholder);
});

// // Set the HTML of our Title to a series of spans, each with their own random animation properties
// title.innerHTML = title.innerText
//   .split('') // Split into array of letters
//   .map((letter, index) => {
//     let randomDelay = Math.floor(Math.random() * 1000);
//     let randomDuration = Math.floor(Math.random() * 4000) + 2000;
//     // let randomDuration = Math.floor(Math.random() * 1000).clamp(randomDelay, 500, 1000);
//     // return `<span style="animation-delay:${index * 100}ms">${letter}</span>`;
//     if (letter === ' ') {
//       return `<span style="padding-left:25px; animation-delay:${0}ms; animation-duration:${randomDuration}ms">${letter}</span>`;
//     }
//     return `<span style="animation-delay:${0}ms; animation-duration:${randomDuration}ms">${letter}</span>`;
//   })
//   .join(''); // Turn array back into a string

// const clamp = (num, min, max) => {
//   return Math.min(Math.max(num, min), max);
// };

// Set the HTML of our Title to a series of spans, each with their own random animation properties

const wordsInTitle = title.innerText.split(' ');
console.log('Words: ', wordsInTitle);
title.innerHTML = '';
wordsInTitle.forEach((word) => {
  console.log('WORD: ', word);
  let wordHTML = `<div>`;
  wordHTML += word
    .split('')
    .map((character, index) => {
      console.log('CHAR: ', character);
      return createSpan(character);
    })
    .join('');
  wordHTML += `</div>`;

  console.log('Final Word HTML: ', wordHTML);
  title.innerHTML += wordHTML;
});

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

function createSpan(character) {
  let randomDelay = Math.floor(Math.random() * 1000);
  let randomDuration = Math.floor(Math.random() * 4000) + 2000;
  let characterHTML = `<span style="animation-delay:${0}ms; animation-duration:${randomDuration}ms">${character}</span>`;
  console.log('CHAR SPAN: ', characterHTML);
  return `${characterHTML}`;
}
