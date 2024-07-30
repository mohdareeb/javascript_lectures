console.log("Hey ");
// question 1 For given array eith marks of students [85,97,44,37,76,60]
// find the average marks of the entire class

let marks_array=[]
let sum = 0 
for(let i=0;i<5;i++){
    let marks = prompt("Enter the marks : ")
    marks_array.push(parseInt(marks))
}

console.log(marks_array)
for(let i=0;i<marks_array.length;i++){
    sum= sum + marks_array[i];
}
console.log(sum)
console.log(sum/marks_array.length)
alert("Your average marks are " , sum / marks_array.length)