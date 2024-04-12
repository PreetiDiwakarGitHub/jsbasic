function reverseofnumber(number){
    let rev=0;
    while(number>0){
        let a=number % 10;
        rev=rev*10+a;
        
        number=Math.floor(number/10);
    }
    return rev;
}
console.log(reverseofnumber(123))