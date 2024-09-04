const address= "baker street";
const city= "London";
// console.log(address.slice(0, 5)); // baker

// console.log(address.split(" "))

// const frndsstr= "Rahul, Rohan, Raj, Ramesh";
// console.log(frndsstr.split(", "));

// const list=[ 'Rahul', 'Rohan', 'Raj', 'Ramesh' ];
// console.log(list.join("- "));


const sentence="Rahul is a  boy "   ;

// let reverse="";
// for(const friends of sentence){
//     reverse= friends + reverse;
// }
// console.log(reverse);


const reversed= sentence.split('').reverse().join('');
console.log(reversed);