
function leapYear(year){
    if((year %100!==0 && year %4===0)||(year % 400===0)){
        return true;
    }
    else{
        return false;
    }
}

const output = leapYear(2000);
const output2 = leapYear(2004);
const output3 = leapYear(2005);
const output4 = leapYear(2100);
const output5 = leapYear(2400);
console.log(output, output2, output3, output4, output5);