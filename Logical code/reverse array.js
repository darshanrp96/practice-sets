console.log("reverse array");

let ary = [1,2,3,4,5];
let revary = [];
 
for(let i = ary.length-1 ; i>=0 ; i--){
 
    revary = revary + ary[i] + " ";
}

console.log(revary);

// another method
// let ary = [1, 2, 3, 4, 5];
// let revary = ary.reverse().join(" ");
// console.log(revary); // "5 4 3 2 1"
