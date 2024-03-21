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

Marks=[12,23,43,45,65,87,98,87,90,97,96,93,91]
let Tmarks = Marks.filter((val)=>{
    return val>90;
})  


let nums=prompt("Enter a number");
let arr=[];
for(let i=0;i<nums;i++){
    arr[i]=i+1;
}

let sum = arr.reduce((pre,curr)=> {
    return pre+curr;
})
let prod=arr.reduce((pre,curr)=>{
    return pre*curr
})