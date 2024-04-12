function firstandlastdigit(number){
   let first = number;
   let last = number%10;
   while(first>=9){
    first = parseInt(first/10)
   }

   return (first + last);
}
console.log(firstandlastdigit(1234));





// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PreetiDiwakarGitHub/jsbasic.git
// git push -u origin main