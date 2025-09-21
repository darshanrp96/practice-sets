console.log("reverse strings");

let str1 = "olleh";
let revstr = "";

for (let i = str1.length -1 ; i>=0 ; i--){
    revstr = revstr + str1[i];

    // let rev =str1.split("")  .reverse()  .join("") 
    // another method build in JS function
}

console.log(revstr);

//---------------------------------
console.log("reverse number");
let revnum= 8485838107;
let rev = "";
let strnum = revnum.toString();

for( let i= strnum.length-1; i>=0; i--){
    rev += strnum[i];
}

console.log(rev);