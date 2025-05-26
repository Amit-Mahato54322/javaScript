
// Example of setInterval in JavaScript
let seconds = 0;
let timer = setInterval(()=>{
    seconds++;
    if(seconds <= 50){
        console.log(`seconds: ${seconds}`)
    }
    
},1000)
console.log("Timer has started...\n")