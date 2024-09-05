const college={
    name:"VJTI",
    address:{
        city:"Mumbai",
        pincode:400019
    },
    events:{
        techfest:"Technovanza",
        cultural:"Zeal"
    },
    departments:["Computer","IT","Mechanical"],
    isPublic:true

}

// console.log(college.address.pincode)
// college.address.city="Nagpur";

// console.log(college.address.city)
// console.log(college["address"]["city"])

console.log(college.departments[1]);

console.log(college);
delete college.isPublic;
console.log(college);