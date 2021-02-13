function localGreet(locale) {
  let language = extractLanguage(locale).toLowerCase();
  let region = extractRegion(locale).toLowerCase();

    switch (region) {
        case 'us':
          return 'Hello USA!';
        case 'gb':
          return 'Ello Mate!';
        case 'au':
          console.log('Hello Thunder from Under!');
        default:
          console.log(`Sorry, we are out of ${expr}.`);
    }

}
//

function extractRegion(str) {
  return str.split('_')[1].split('.')[0];
}
function extractLanguage(str) {
  return str.slice(0,2);


// extractRegion('en_US.UTF-8');  // 'US'
// extractRegion('en_GB.UTF-8');  // 'GB'
// extractRegion('ko_KR.UTF-16'); // 'KR'

//
}

// // should have used split, so we could use a delimiter _'
// extractLanguage('en_US.UTF-8');  // 'en'
// extractLanguage('en_GB.UTF-8');  // 'en'
// extractLanguage('ko_KR.UTF-16'); // 'ko'


// console.log('Captain Ruby'.replace('Ruby', 'Javascript'));
//

// // switch statement practice
// function compareByLength(str1, str2) {
//
//   switch (expr) {
//     case 'Oranges':
//       console.log('Oranges are $0.59 a pound.');
//       break;
//     case 'Mangoes':
//     case 'Papayas':
//       console.log('Mangoes and papayas are $2.79 a pound.');
//       // expected output: "Mangoes and papayas are $2.79 a pound."
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }
// }



// let weather = 'snowy';


// let randomNumber = Math.round(Math.random());
// if randomNumber ? console.log('Yes!') : console.log('No!')

// if (randomNumber === 1) {
//   console.log('Yes!')
// } else console.log('No!');
