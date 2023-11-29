function sayMyName(){
    console.log("Abhinay Kumar")
}

// sayMyName -> reference
// sayMyName() -> execution

// sayMyName()
// Output: Abhinay Kumar

// Create a funciton of adding 2 no.
/*
function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

What is Parameters and Arguments 
function addTwoNumbers(Parameters){

    console.log(number1 + number2);
}
addTwoNumbers(arguments)
*/

function addTwoNumbers(number1, number2){

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);
// Output: Result:  8


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Abhinay"))
// Output: Abhinay just logged in


// Rest Operator
function calculateCartPrice(val1, val2, ...num1){
    return [val1, val2, num1]
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// Output: [ 200, 400, [ 500, 2000 ] ]

// Passing object in a function
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// Output: Username is hitesh and price is 199

// Passing object directly in function 
handleObject({
    username: "sam",
    price: 399
})

// Passing Array in function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// Output: 400

// Pasing Array directly in function 
// console.log(returnSecondValue([200, 400, 500, 1000]));
// Output: 400
