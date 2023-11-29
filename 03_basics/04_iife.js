// Immediately Invoked Function Expressions (IIFE)

// global scope ke variable se problem se bachne ke liye iife ka use karte hai 

// ()() // (function)(execution)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')