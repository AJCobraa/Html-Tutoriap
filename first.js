// const profile={
//     username:"Anupam Jose",
//     followers:569000,
//     following:4, 
//     isFollow:true,   
// };
// console.log(profile.username);
// grade=prompt("Enter your grade");


// if(Num%5===0){
//     console.log(Num,"is divisible by 5");
// }else{
//     console.log(Num,"is not divisible by 5");
// }

// console.log(username);
// str="Anupam";
// for (let i of str){
//     console.log(i)

// }
// for (let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
// let gameNumber =25;
// let guess=prompt("Guess a number");
// console.log(guess);
// while(guess!=gameNumber){
//     guess=prompt("Guess a number");
// };
// console.log("You guessed it right");

// let arr=["BLOO", "Micro","Uber","Google","IBM","Netflix"];
// // for(let i of arr){
// //     console.log(i)
// // }
// for(let i=0; i<arr.length;i++){
//     console.log(`company nams are ${arr[i]}`);
// }
// a=arr.splice(2,1,"Ola");
// arr.push("Amazon");

// function vovelcount(word){
    
    
//     // let vovel=["a","e","i","o","u"];
//     let count=0;
//     for(let i of word){
//         console.log(i)
//         if (i ==="a" || i ==="e" || i ==="i" || i ==="o" || i ==="u"){
//             count++;
//         }
//     }
//     return count;
        
// }
// const countV = (str)=>{
//     let count=0;
//     for(let i of str){
//         if(i ==="a" || i ==="e" || i ==="i" || i ==="o" || i ==="u"){
//             count++;
//         }
//     }
//     return count;
// };

// let word=prompt("Enter a word");
// console.log(countV(word));


const a=[1,2,3,4,5,6,7,8,9,10];
// let mult= (i)=>{
//     return i*2;
// };
// let b=a.map(mult);
// let c=a.map((val)=>val*val);
// let d=a.filter((val)=>{
//     if(val%2===0){
//         return val
//     }
// })
// let e = a.reduce((pre,curr)=>{
//     return pre>curr ? pre:curr;
// })

// Marks=[12,23,43,45,65,87,98,87,90,97,96,93,91]
// let Tmarks = Marks.filter((val)=>{
//     return val>90;
// })  


// let nums=prompt("Enter a number");
// let arr=[];
// for(let i=0;i<nums;i++){
//     arr[i]=i+1;
// }

// let sum = arr.reduce((pre,curr)=> {
//     return pre+curr;
// })
// let prod=arr.reduce((pre,curr)=>{
//     return pre*curr
// })
// console.dir(window.document.body)
// // document.body.childNodes[1].childNodes[1].innerText="ABCD"
// let h=document.getElementById("heading")
// console.dir(document.body.firstElementChild)
// let div=document.querySelector("div");
// console.dir(div)
// let heading=document.querySelector("h1")
let h2=document.querySelector("h2");
let h3= h2.innerText + " From Anupam Jose";
h2.innerText=h2.innerText + " From Anupam Jose";
box=document.querySelectorAll(".box");
count=1
let color= ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

for (i of box){
    i.innerText=i.innerText+" "+ count;
    let randColor=color[Math.floor(Math.random()*color.length)];
    console.log(randColor);
    i.style.background=`${randColor}`
    count++
}
// for (i of box){
//     i.
// }

let newButton=document.createElement("button");
newButton.innerText="Click Me";

document.querySelector('body').before(newButton);
newButton.style.background="red"
newButton.style.color="green"

let p1=document.querySelector(".para")
p1.classList.add("para1")
