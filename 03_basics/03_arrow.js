// funciton inside object
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
/*hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/

user.username = "sam"
// user.welcomeMessage()
/*sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/

// console.log(this);
// -> {}

// ----------------------------------------------------------------------------------

// function chai(){
//     let username = "Abhinay"
//     console.log(this.username);
// }
// chai()
// -> undefined
// Observation: "this" only work in object

// ----------------------------------------------------------------------------------

// const chai = function () {
//     let username = "Abhinay"
//     console.log(this.username);
// }

// chai()
// -> undefined
// ----------------------------------------------------------------------------------

const chai =  () => {
    let username = "Abhinay"
    // console.log(this.username) // -> undefined
    console.log(this); // -> {}
}
// chai()
// -> {}

// ----------------------------------------------------------------------------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // By default return statement runs. Only when we have 1 statment

// const addTwo = (num1, num2) => ( num1 + num2 ) // Return statement is not needed

const addTwo = (num1, num2) => ({username: "Abhinay"}) // This is a way to Return object

console.log(addTwo(3, 4))
// -> { username: 'Abhinay' }