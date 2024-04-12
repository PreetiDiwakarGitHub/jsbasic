function swap(a,b){
    let num;
    num=a;
    a=b;
    b=num;
    return [a,b];
}
console.log(swap(2,3));