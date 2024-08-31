// javscipt tutorial
// 1-variale var(globaly),let(block),cost
// type of null is object
var a=0,b=9,c=6;
let f=0,e=6;
var d="hello";
const h=9+20,j="loveleen";
console.log(h,j, a+b+c,typeof a,typeof d);
console.log(e+f,typeof f);

// !!!! name is key and loveleen is value
let p={
    "name":"Loveleen"
}
console.log(p.name[0]);


// conditional  if,if else , else ladder
let blub=10;
if (blub<0) {
    console.log("blub is on");
} else {
    console.log("blub is off");   
}
// assignment opeartor,comparsion ,logical(&&,||,!)
var a=9, b=3;
console.log(a*b);
console.log(a**b);
console.log(a=+b);
console.log(a+=b);
console.log(a*=b);
console.log(a-=b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

var light=0;
// if (light==0) {
// if (light!=0) {
if (light!=0) {   
     console.log("blub is on");
} else {
    console.log("blub is off");   
}
// if lese ladder
var  fridge=3;
if (fridge==0) {   
    console.log("fridge open");
} else {
   console.log("fridge close ");   
}if (fridge!=0) {   
   console.log("light is gone");
} 
// loops for, while, do while, for in loop

for (let i=0; i<20; i++) {
    console.log(i);
}
for (let i=30; i<20; i++) {
    console.log(i);
}

let object ={
    "name":"paul",
    "role":"web development"
}
console.log(object);

for (const key in object) {
    // const element = object[key];
    // console.log(key,element[0,2]);
    console.log(key,object);
}
for(const l of "loveleen"){
    console.log(l);
}
i=15
while(i>9){
   console.log(i,("while"));
   i--;
}
ii=30
do {
    console.log(ii);
   ii--;
} while (ii>20);
