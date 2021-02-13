let launchStr = 'launch school tech & talk'

function splitCap(str) {
  let splitStrArray = str.split(' ');
  let capArray = splitStrArray.map(function(smallStr) {
    let newStr = smallStr[0].toUpperCase();
    let finalString = newStr + smallStr.slice(1);
    return finalString;
  });
  console.log(capArray);
  return capArray.join(' ');
}

console.log(splitCap(launchStr));

// function isBlank(str) {
//   if (str.length > 0) {
//     return true;
//   } else return false;
// }

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
//
// console.log(/x/.test(byteSequence));

// console.log("A pirate I was meant to be! \nTrim the sails and roam the sea!");

// function repeat(times, str) {
//   for (let i = 0; i < times; i++) {
//     console.log(str);
//   }
// }
//
// repeat(3, 'a');
