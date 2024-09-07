function oddAvg(arr){
    const arr2 = [];    
    for(let num of arr){
        if(num%2===1){
            arr2.push(num);
        }
    }
    sum=0;
    for(let num1 of arr2){
        sum+=num1;
    }
    return sum/arr2.length;

}
console.log(oddAvg([1,2,3,4,5,6,7,8,9,10])); //5



function evenAvg(arrrr){
    const arr3 = [];    
    for(let num of arrrr){
        if(num%2===0){
            arr3.push(num);
        }
    }
    sum=0;
    for(let num1 of arr3){
        sum+=num1;
    }
    return sum/arr3.length;
}
console.log(evenAvg([1,2,3,4,5,6,7,8,9,10])); //6
