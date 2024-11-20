// 50+ JavaScript Practice Exercises || Master JavaScript 2024


// ------25--------
// ------24-Implement a private variable using closures -------



// ------23- counter function using closures that increments-------
function createCounter(){
let count =0;
return function(){
    return ++count
}
}
let counter= createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());





// ------22- recursive function finds the nth Fibonacci number-------
// 0 1 2 3 5 8 13 21


// function Fibonacci(n){
//     if(n<=1){
//         return n;
//     }
//     else{
//         return Fibonacci(n-1)+Fibonacci(n-2);
//     }
// }
// console.log(Fibonacci(8));




// ------21-recursive function find factorial-------

// function factorial(n){
//     if(n==1){
//         return 1;
//     }
//     else{
//         return n*(factorial(n-1))
//     }
// }
// console.log(factorial(5));




// ------20- try-catch block to handle an error of API fetch-------
// async function fetchData(){
// try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     console.log(data);
// } catch (error) {
//     console.error("Error fetching Data:"+error)
// }
// }
// fetchData();




// ------19-Display the current date and time-------
// function getCurrentDateAndTime(){
//     let currentDate =new Date();
//     return currentDate.toLocaleString();
// }
// console.log(getCurrentDateAndTime());



// ------18-Remove all (copy/dublicate)occurrences of a specific element-------
// function removeElementFromArray(array,target){
//     return array.filter(item => item !== target)
// }
// let array=[40,30,50,50,50,90,60,40,60];
// let target=50;
// let removed=removeElementFromArray(array,target)
// console.log(removed);





// ------17-Find the largest element using reduce()-------
// function findLArgestElement(array){
// return array.reduce((max,current)=>
//     current >max ? current:max)
// }
// let array=[40,30,50,60];
// let reduce=findLArgestElement(array);
// console.log(reduce);





// ------16- Use `map()` to double all the elements-------

// function douleArrayelements(arr){
// return arr.map(num=>num *2) 
// }
// let arr=[10,20,30,40,50];
// console.log(douleArrayelements(arr));
// console.log(arr)




// ------15-returns a new array of even numbers-------
// let arrays=[10,70,40,50];
// function filterEvenNumber(arrays){
//     return arrays.filter(num => num %2 ===0);
// }
// console.log(filterEvenNumber(arrays));





// ------14-random number between a given range-------
// function RandomNumber(min,max){
// return Math.floor(Math.random()
// *(max-min+1))+min;
// }
// console.log(RandomNumber(50,100));





// ------13- calculates the factorial-------

// function factorial(num){
//     if(num===0 || num===1){
//         return 1;
//     }
//     else{
//         let  fact=1;
//         for(let i=1; i<=num; i++){
//             fact*=i;
//         }
//         return fact;
//     }
// }
// console.log(factorial(5));


// ------12-displayed an alert when the button clicked -------
// let button=document.querySelector("#btn")

// button.addEventListener("click",()=>{
//     alert("clicked");
// })




// ------11- Create a button dynamically and add it to the webpage-------
// let conatiner=document.getElementById("container");
// let button=document.createElement("button");
// button.innerHTML="click me";
// conatiner.appendChild(button)

// let container=document.getElementById("container");
// let button=document.createElement("button");
// button.innerHTML="Click Me!!";
// container.appendChild(button)




// ------10-Change the text of a paragraph on a webpage-------
// let Paragraph = document.querySelector("#myParagraph")

// Paragraph.addEventListener("mousemove",function(){
//     Paragraph.style.color="red";
//     Paragraph.style.fontWeight="bold";
//     Paragraph.style.fontSize="20px";
//     Paragraph.innerHTML="I'm Website Designer"
// })
// Paragraph.addEventListener("mouseleave",function(){
//     Paragraph.style.font="italic";
// })



// ------9- Create an object and add a method-------
// let car ={
//     make:"Toyota",
//     model:"camry",
//     year:2022
// }
// car.startEngine = function(){
//     console.log("Enine Started");
// }
// car.startEngine();



// ------8- Sum of all elements in an array-------
// let arr =[20,40,30,10,4];
// let sum=0;
// for( let i=0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log("plus",sum);



// ------7-checks if a given year is a leap year-------
// let isLespYear=(year)=>{
//     if(year % 4 === 0 && 
//        year % 100 !==0 ||
//        year % 400 === 0){
//         return true
//        }
//        else{
//         return false;
//        }
// }
// console.log(isLespYear(2024))




// ------6-function that checks if a number is even or odd-------
// function check(a){
//     if(a % 2 ==0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }
// console.log(check(33))



// ------5- function returns the reversed version string-------
// let a="Hello World";
// function reverse(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverse("hello"))


// ------4-function to calculate the area of a rectangle 
// let calculateAreaOfaRectangle=(width,height)=>{
//     return width*height;
// } 
// console.log("AreaOfaRectangle:",calculateAreaOfaRectangle(5,6));


// ------3-function to add two numbers and return the result-------
// function add(a,b){
//     return a+b;
// }
// let c=add(3,3)
// console.log("two number Add",c)
// console.log("yeh bhi jariya hain add karne ka",add(3,3))



// ------2-Print the numbers using the loop-------

// For Loop
// for(var i=1; i<=5; i++){
//     console.log(i)
// }

// While Loop
// let i=0;
// while (i<=5) {
//     console.log(i)  
//     i++;
// }

//  Do While Loop
// let i=1;
// do {
//     console.log(i);
//     i++
// } while (i<=5);



// ------1-Print"Hello, World!"------
// console.log("Hello Wolrd");
// let greet="Hello Wolrd"
// console.log(greet);








// function factorial(n){
//     let result=1;
//     for(let i=1; i<=n; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));

// let reversesentence="Your Present Change You Future";
// let reversesentencecharacter=reversesentence.split('');
// console.log(reversesentencecharacter);
// reversesentencecharacter.reverse();
// console.log(reversesentencecharacter);
// let reverseresentenejoin=reversesentencecharacter.join('');
// console.log(reverseresentenejoin);

// ----lets do in single line-----

// function reverestring(str){
//     return str.split('').reverse('').join('');
// }
// console.log(reverestring("hello"))

// ------------------------------

// let str="HelloPaul";
// let arr=str .split('');
// console.log(str)
// console.log(arr)
// arr = arr.reverse();
// console.log(arr);
// let reversedstr=arr.join('');
// console.log(reversedstr)


// function rvs(str){
//     return str.split('').reverse().join('');
// }
// console.log(rvs("hello"))