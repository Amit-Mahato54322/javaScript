
Example of setInterval in JavaScript
let seconds = 0;
let timer = setInterval(()=>{
    seconds++;
    if(seconds <= 50){
        console.log(`seconds: ${seconds}`)
    }
    
},1000)
console.log("Timer has started...\n")

// These methods below will not work
// let counter = 0;

// function timer() {
//     counter++;
//     console.log(`Seconds: ${counter}`);
// }

// setInterval(timer, 1000); // ✅ this works as expected

// // setInterval(timer(),1000);// this will call the function timer() immediately, which will return error
// // setInterval(timer,1000);
