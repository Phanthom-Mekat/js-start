const mobiles = {
    apple: 'iphone',
    samsung: 'galaxy',
    google: 'pixel',
    oneplus: 10,

};


// for of use for array     // array er jonno for of loop use kora hoy  


// for in loop  use for object  // object er jonno for in loop use kora hoy

// for (let key in mobiles) {
//     console.log(key,mobiles[key]);
// }

// const keys = Object.keys(mobiles);
// console.log(keys);

// for(const key of keys){
//     console.log(key,mobiles[key]);
// }

// mobiles.new = 'new mobile';
// console.log(mobiles);

// console.log(Object.keys(mobiles).length);

// for (const key in mobiles) {
//     console.log(key, mobiles[key],typeof mobiles[key]);
// }

const latter = 'For more than 10 years, jQuery has been the most popular JavaScript library in the world.';

//make upper case only first letter of each word
const words = latter.split(' ');
console.log(words);
const upperCased = [];
for (const word of words) {
    const firstLetter = word[0].toUpperCase();
    const rest = word.slice(1);
    const upperCase = firstLetter + rest;
    upperCased.push(upperCase);
}
console.log(upperCased);
const upperCasedWords = upperCased.join(' ');
console.log(upperCasedWords);