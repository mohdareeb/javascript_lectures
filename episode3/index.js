// Quuestion 1 : print all the even number upto 100

let i=0
while(i<=100){
    if(i%2==0){
        console.log(i)
    }
}

// Question2 

let name = prompt("Enter the full name : ")
let len = name.length;
let username = "@" + name + len;
console.log(username)