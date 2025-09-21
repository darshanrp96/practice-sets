console.log("match elements in two arrays");

let ary1 = [1,2,3,4,5];
let ary2 = [4,5,6,7,8];

let match = [];
for (let i=0; i<=ary1.length-1; i++)
{
    for(let j=0; j<=ary2.length-1; j++){
        if(ary1[i] == ary2[j]){
            match.push(ary1[i]);
        }
    }
}

console.log(match);

