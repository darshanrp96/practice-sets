console.log("reverse strings");

let str1 = "olleh";
let revstr = "";

for (let i = str1.length -1 ; i>=0 ; i--){
    revstr = revstr + str1[i];

}

console.log(revstr);

//---------------------------------
console.log("reverse number");
let revnum= 8485838107;
let rev = "";
let strnum = revnum.toString();

for( let revnum= strnum.length-1; revnum>=0; revnum--){
    rev = rev + strnum[revnum];
}

console.log(rev);