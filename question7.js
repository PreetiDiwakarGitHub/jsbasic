// question 1
// / function check(num){
//     if(num%2==0){
//         return ("Even");
//     }
//     else{
//         return ("Odd");
//     }
// }
// console .log(checks(4));

// question 2   \\\\\\\\\\\\\\\

// function largernumber(num1,num2){
//     if(num1>num2){
//         return(num1);
//     }
//     else{
//         return(num2);
//     }
// }
// console.log(largernumber(5,4));

// question  3


// function leapyear(year){
//    if((year%100!=0 && year%4==0)||(year%400==0)){
//     return("Leap Year");
//    }
//    else{
//     return("Not leap Year")
//    }
// }
// console.log(leapyear(2000));

// question  4     \\\\\\\\\\\\\


// function vowelconsonant(character){
//     if(character=='A'|| character == 'I' || character == 'O' || character == 'U' || character=='E'){
//         return ("Vowel");
//     }
//     else{
//         return ("consonant");
//     }
// }
// console.log(vowelconsonant('B'));


// question  5    \\\\\\\\\\\\\


// function largestnumber(num1,num2,num3){
//     if(num1>num2){
//         if(num1>num3){
//             return (num1);
//         }
//         else{
//             return (num3);
//         }
//     }
//     else if(num2>num3){
//         return (num2);
//     }
//     else{
//         return(num3);
//     }
// }
// console.log(largestnumber(3,4,1));


// question    6   \\\\\\\\\\\\\\


// function checknumber(num){
//     if(num>0){
//         return("positive");
//     }
//     else if(num<0){
//         return("negative")
//     }
//     else{
//         return ("Zero");
//     }
// }
// console.log(checknumber(-1));


// question   7 \\\\\\\\\\\\

// function score(score){
//     if(score>90){
//         return("A");
//     }
//     else if(score>70){
//         return("B");
//     }
//     else if(score>50){
//         return("C");
//     }
//     else if(score>30){
//         return("D");
//     }
//     else{
//         return("Fail");
//     }
// }
// console.log(score(90))



// question 8 \\\\\\\\\



// function check(str){
//     let r = "";                                       
//     for(let i = str.length-1; i>=0; i--){
//         r+= str[i];
//     }
//     if(r==str){
//         return "YES";
//     }else{
//         return "NO";
//     }
// }
// let string = check("mam");
// console.log(string);

// question    9\\\\\\\\\\\\\\\

// function eligible(age){
//     if(age>=18){
//         return("Eligible for vote");
//     }
//     else{
//         return("Not Eligible for vote");
//     }
// }
// console.log(eligible(12));



// question   10 \\\\\\\\\

// function triangle(a,b,c){
//     if(a==b && b==c && c==a){
//         return("equilateral");
//     }
//     else if(a==b || b==c || c==a){
//         return ("isosceles");
//     }
//     else{
//         return ("scalene");
//     }
// }
// console.log(triangle(1,1,1));





// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PreetiDiwakarGitHub/ifelsequestion.git
// git push -u origin main