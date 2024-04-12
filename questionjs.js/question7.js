function firstdigit(number){
   let first = number;
   while(first>=9){
      first=parseInt(first/10);
   }
   return(first);

}
console.log(firstdigit(1234))