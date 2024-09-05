const bottle={
    color:'yellow',
    hold:'water',
    price:50,
    isCleaned:true
}
// getting all properties names
const keys=Object.keys(bottle);
console.log(keys);
// getting all values
const values=Object.values(bottle);
console.log(values);
// getting all key value pairs
const pairs=Object.entries(bottle);
console.log(pairs);
// delete a property
delete bottle.isCleaned;
console.log(bottle);
// seal the object
Object.seal(bottle);    // can't add new property, can change existing property value but can't delete property value       
bottle.price=100;
bottle.height=16;
console.log(bottle);
// freeze the object
Object.freeze(bottle); // can't add new property, can't change existing property value, can't delete property value 
bottle.price=100;
bottle.height=16;
console.log(bottle);
// prevent extension
Object.preventExtensions(bottle); // can't add new property but can change existing property value same as seal but can't delete property value like seal and freeze   
bottle.price=100;
bottle.height=16;

console.log(bottle);
console.log(Object.isSealed(bottle));
console.log(Object.isFrozen(bottle));
console.log(Object.isExtensible(bottle));
