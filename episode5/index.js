// Question 1 : we are given array of marks of students. Filter out of marks of 
// students that scored 90

let arr= [80,85,90,95,99,98];
let new_arr= arr.filter((val)=>{
    if(val>=90) return val;
})

console.log(new_arr);

// question 2 : take a number n as input from user .Create 
// an array of numbers from 1 to n.
// use the reduce methods to calculate the sum of all the numbers in the array.
// use the reduce methods to calculate the product of all the numbers in the array

let n = prompt("Enter the value of n : ")
let arr2=[];

for(let i=1;i<=n;i++){
    arr2.push(i);
}

let ans_sum=arr2.reduce((prev,curr)=>{
   return prev + curr;

})

console.log(ans_sum);
