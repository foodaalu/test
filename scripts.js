const s = 'technology.computer,id,code';
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(' , '));


/* arrays  = variable that hold multiple values*/
const numbers = new Array(1, 2, 3, 4, 5); // 0 1 2 3 4
const fruits = ['apple', 'oranges', 'pears', 10];

fruits[3] = 'graphs';

fruits.push('mangoes');


fruits.unshift('straberries');

fruits.pop();

console.log(Array.isArray(fruits));


console.log(numbers);
console.log(fruits.indexOf('oranges'));



/* object literial  */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['MUSIC', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.street);

const {
    firstName,
    lastName,
    address: {
        city
    }
} = person;

console.log(city);

person.email = 'johndoeemail@gmail.com';
console.log(person.email);



const todos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Metting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);



// forloop,forin foreach

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);

}

// while

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// forof
for (let todo of todos) {
    console.log(todo.text);
}

// forEach , map , filter
/* 
        forEach -> loops to them.
        map ->   which will allow to create new array in array 
        filter -> filter is based in new array 
*/
todos.forEach(function (todo) {
    console.log(todo.id);
});

const todoText = todos.map(function (todo) {
    return todo.text;
});

console.log(todoText[0]);


const todofilter = todos.filter(function (todo) {
    return todo.isCompleted == true;
}).map(function (todo) {
    return todo.text;
});
console.log(todofilter[1]);


/* conditional statement */

const x = 10;
const y = 11;

if (x > 5 && y > 10) {
    console.log(true);
}
if (x > 5) {
    console.log(true);
}


/* Ternatory operator */
const n = 10;
const color = n >= 10 ? true : false;
console.log(color);

switch (color) {
    case true:
        console.log(true);
        break;
    default:
        console.log(false);
        break;
}



/* function */


function addNum(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNum(5, 4));

// arrow function
const addNumber = (a, b) => {
    return a + b;
}
console.log(addNumber(10, 10));


// arrow function simple 

const addnum = (x = 1, y = 1) => {
    return x + y;

}

console.log(addNum(10, 20));

todos.forEach((todo) => console.log(todo.text));

/* OOP */
// constructor function
function Person(firstname, lastname, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBrithYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
Person.prototype.getBrithYear = function () {
    return this.dob.getBrithYear();
}
Person.prototype.getFullName = function () {
    return this.firstName + this.lastName;
}

// class
class Admin {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    getBrithYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return this.firstName + this.lastName;
    }
}
const obj = new Admin('saroj', 'ghising', '4-3-1997');
console.log(obj.getFullName());
// instantiate object
const person1 = new Person('John', "doe", '4-3-1998');
const person2 = new Person('John', "doe", '4-3-1998');


console.log(person2.dob.getFullYear()); //  single 
console.log(person1.getBrithYear());; // function

console.log(person1.getFullName());
console.log(person1);








/* 





*/