// { } -> kisi function ke sath, ya kisi if, else ke sath aata hai to scope kehte hai

// ----------------------------------------------------------------------------------
// Problwm with var:
var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30  
}
// console.log(a);
// -> Error: Cannot access 'a' before initialization
// console.log(b);
// -> Error: b is not defined
// console.log(c);
// -> 30

// ----------------------------------------------------------------------------------

let a = 300
// Global Scope
if (true) {
    // Block Scope
    let a = 10
    const b = 20
    // console.log(a);
    // -> 10
    
}
// console.log(a);
// -> 300
// console.log(b);
// -> Error: b is not defined

// ----------------------------------------------------------------------------------

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // -> Error: 

    two()
}
one()
// -> hitesh

// we use same concept with if else also
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ----------------------------------------------------------------------------------
// ++++++++++++++++++ interesting ++++++++++++++++++

// 2 ways to use function 
// Hosting 

// console.log(addone(5))
// -> 6
function addone(num){
    return num + 1
}

// addTwo(5)
// -> Error: 
const addTwo = function(num){
    return num + 2
}