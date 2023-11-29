// const tinderUser = new Object() 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Creating Nasted objects 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); Accessing keys in nasted objests


// Merging multiple object 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = { obj1, obj2 }
// console.log(obj4);
// Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


const obj5 = Object.assign({}, obj1, obj2, obj3) // .assign(target, source)
// console.log(obj5);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Using Spread Operator
const obj6 = {...obj1, ...obj2}
// console.log(obj6)
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Creating array of multiple objects 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// Output: [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));
// Output: [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser));
// Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Output: true

// De-structuring in Js
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Abhinay"
}

const {courseInstructor} = course
// console.log(courseInstructor);
// Output: Abhinay

const {courseInstructor: instructor} = course
// console.log(instructor);
// Output: Abhinay 

