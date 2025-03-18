// script.js



// const person = {name: "Jon", age: 30, gender: "male"};

// function printPerson({name, age, gender}) {
//     console.log(name + ' ' + age + ' ' + gender);
// }

// printPerson(person);



// const colors = ["red", "green", "blue"];

// function printColors([first, second, third]) {
//     console.log(second, first, third);
// }

// printColors(colors);



function printName({name = "Jon", age = 27}) {
    console.log(name + ' ' + age);
}

printName({age: 30});
printName({name: "Mike", age: 35});