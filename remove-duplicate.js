function noDuplicate(arr){
    const nodup=[];
    for(const i of arr){
        if(nodup.includes(i)===false){
            nodup.push(i);
        }
    }
    return nodup
}

const uniquearrays =noDuplicate([1,2,3,4,5,5,3,24,1,2,3,4,5])
console.log(uniquearrays)