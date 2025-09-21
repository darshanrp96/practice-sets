console.log("palindrome");

let str1 = "level";
let revstr = "";

for (let i = str1.length -1 ; i>=0 ; i--){
    revstr = revstr + str1[i];
}

if (str1 == revstr){
    console.log(`${str1} is palindrome`);
}
else{
    console.log(`${str1} is not palindrome`);
}

//A palindrome is a word, number, phrase, or sequence that reads the same forward and backward 
// — ignoring spaces, punctuation, and capitalization in some cases.