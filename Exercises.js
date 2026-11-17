//? Array and array methods

// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// push - adds an element to the end of the array
// pop - removes the last element from the array
// shift - removes the first element from the array
// unshift - adds an element to the beginning of the array


// fruits.shift();

// console.log("List of fruits:" + fruits);

//? Objects and object properties

// const employee = {
//     id: 101,
//     name: "Antony",
//     role: "Developer",
//     marks: {
//         math: 85,
//         science: 90,
//         english: 78
//     }
// };

// console.log("Employee Details:", employee);
// console.log(employee.name)
// console.log(employee["name"]);


// employee.department = "Computer Science";
// console.log("Updated Employee Details:", employee);
// console.log("Maths mark", employee.marks.math)

//? Object Destructering

// const user = {
//     name: "Amal",
//     age: 27,
//     profession: "Developer"
// }

// const {name, age, profession} = user


// console.log("User Name: " + name)
// console.log("Profession: " + profession)

// const {name : userName} = user
// console.log("User Name: " + userName);


//? Array Desturucturing

// const collors = ["Red", "Orange", "Green", "Blue"];

// const [first, second, third, fourth] = collors;

// console.log(fourth);

//? Spread Operator - used to copy the values of one array or object into another array or object

// copy an array

// const orginal = [10,20,30,40];
// const copy = [...orginal];

// copy.push(50);

// console.log("Original Array: " + orginal);
// console.log("Copied Array: " + copy);

// merge two arrays

// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express", "MongoDB"];

// const technologies = [...frontend, ...backend];

// console.log("Technologies: " + technologies);

//? copy an object

// const user = {
//     name: "Amal",
//     age: 27
// }

// const updatedUser = {...user, age: 28 }

// console.log("Updated User", updatedUser);


//? Rest Operator

// Rest operator used 

// function calculateTotal (...prices) {
//     return prices.reduce((total, price) => total + price , 0);
// }

// console.log(calculateTotal(150,200,300));

// Object Rest

// const employee = {
//     name: "Antony",
//     age: 27,
//     salary: 3000
// }

// const {name, ...otherdetails} = employee

// console.log(otherdetails)

// Optional chaining and nullish coalescing

// const user = {
//     name: "Antony"
// }
// console.log(user.address?.city ?? "City Not Found");
// console.log(user?.address || "Adress Not Found");

//! TODAY WORKS

//? WORK 1

// const employee = [
//     {
//         id: 1,
//         name: "Antony",
//         department: "Development",
//         salary: 30000
//     },
//     {
//         id: 2,
//         name: "Akshay",
//         department: "HR",
//         salary: 20000
//     },
//     {
//         id: 3,
//         name: "Bibin",
//         department: "Development",
//         salary: 25000
//     },
//     {
//         id: 4,
//         name: "Nikhil",
//         department: "Operations",
//         salary: 28000
//     },
//     {
//         id: 5,
//         name: "Athul",
//         department: "Development",
//         salary: 22000
//     }

// ]

// const firstEmployee = employee[0];
// console.log(firstEmployee);
// const newEmployee = {
//         id: 6,
//         name: "Amal",
//         department: "Development",
//         salary: 18000
//     }

// employee.push(newEmployee);
// console.log(employee)

// update employee salary

// employee.find((emp) => emp.id === 3).salary = 27000 ; 

// console.log(employee);

// find an employee with id

// console.log("Employee with id 5: ", employee.find((emp) => emp.id == 3));

// const employeeCopy = [...employee];

// console.log(employeeCopy);


//? WORK 2
// const developer = {
//     name: "Antony",
//     skills: {
//         frontend: ["React", "JavaScript"],
//         backend: ["Node.js", "Express"]
//     },
//     experience: 1
// };

// console.log(developer.name)
// console.log(developer.experience)
// console.log(developer.skills.frontend);
// console.log(developer.skills.backend);
// const {name : developerName} = developer;
// console.log(developer)
// console.log(developerName)

//? WORK 3

// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend =  ["Node", "Express", "Mongodb"];
// const fullstack = [...frontend, ...backend];
// const technologies = [...fullstack]
// console.log(fullstack);
// console.log("Technolgies", technologies);
// const newTech = [...technologies, "MySQL"];
// console.log(newTech);
// console.log(fullstack);

//? WORK 3

// function calculateTotal(...numbers){
//     const total = numbers.reduce((acc, num) => acc + num , 0)
//     return {total, average: total / numbers.length}
// }

// const { total, average } = calculateTotal(20,30,50,20);

// console.log("Total: ", total);
// console.log("Average: ", average);

//? WORK 4

const order = {
    id: 101,
    customer: {
        name: "Arun",
        address: {
            city: "Kochi"
        }
    },
    payment: {
        method: "UPI"
    }
};

console.log(order.customer.name);
console.log(order.customer.address.city);
console.log(order?.customer?.optionalDelivery ?? "COD");

const updatedOrder = {...order, optionalDelivery: "COD"}
console.log(updatedOrder);






