/* 1 VARIABLES */
var x = 10;  
var y = 20;  
var z=x+y;  
console.log(z);  
/* 2 SCOPE OF VARIABLES */

/* BLOCK SCOPE */
function food(){
    if(true){
        var fruit1 = 'apple';        
        const fruit2 = 'banana';     
        let fruit3 = 'strawberry';   

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

food();
/* FUNCTION SCOPE */
function vegs(){
    var veg = 'tamato';
    console.log('function:',veg);
}
veg();
console.log(veg);


/* GLOBAL SCOPE */
let greeting = "Hello World ";

function greet () 
{
    console.log(greeting);
}
greet();


/* 3 HOISTING */
g= 10; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = g;           // Display x in the element

var g; // Declare x

/* 4 DATA TYPE */
let itemName = "Monitir";//Strings
let itemType = 'Computer';   
console.log(typeof(itemName))
console.log(typeof(itemType))

let data1=false; //Boolean datatype
let data2=true; //Boolean datatype
console.log( typeof(data1))
console.log(typeof(data2))

/* 5 OBJECT */
const Car = new Object();
Car.Make = 'Tata';
Car.Model = 'Nexon';
Car.Year = 2014;
console.log(Car);

/* 6 OPERATORS */
let num1=10;
let num2=20;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

/* 7 TYPE CONVERSION */

console.log(typeof 10); // "number"
console.log(typeof "Hello World!"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof [5, 2.6, true, "John"]); // "object"

/* 8 LOOPS */
/* while loop */

let i = 1, num = 5;
while (i <= num) {
    console.log(i);
    i += 1;
}

/* do while */
let j = 1;
const num = 5;
do {
    console.log(j);
    j++;
} 
while(j <=num);

/* 9 ARRAY */
const bike = ["royalenfield", "ninja", "bmw"];
bike.pop();
console.log(bike);
bike.push('pulsar');
console.log(bike);

/* 10 OBJECT REFERENCING */
let user = { name: 'Naik' };

let admin = user;

admin.name = 'Goutham'; // changed by the "admin" reference

alert(user.name);

/* 11 This Keyword */
const person = {
    name: 'Goutham',
    greet: function()
 {
    let surname = 'Naik';
console.log('Name' + ' ' + this.name + ' ' +'Lastname '+ surname); 
}
};
person.greet();


/* 12 GENERIC  FUNCTIONS */
function welcome()
{
    console.log("Welcome to my World");
}
welcome();


/* 13.Constructor */

function  Person () {
    this.name = 'dfgb',
    this.age =' 24'}
    const p1 = new Person();
console.log(p1.name); 
console.log(p1.age);



/* 14.Synchronous and Asynchronous */
function printNumbers(from, to) 
      {
        for (let i = from; i <= to; i++) {
          setTimeout(() => { 
            console.log(i);
          }, i * 1000);
        }
      }
      printNumbers(1, 5);


/* 15 SPREAD OPERATOR */
const brands = ['tata', 'benz', 'ford', 'audi'];

console.log(brands); 
console.log(...brands); 


/* 16 REST  OPERATOR */
function sum(a, b ,c, d) {
    console.log(a + b + c + d);
}

const result = [2, 4, 6, 8];

sum(...result); 

/* 17 DESTRUCTING */
const value = ['Electronics', 'Groceries', 'Accessories','Clothing', 'Food'];
const [aa, bb, cc, dd, ee] = value;

console.log(aa);
console.log(bb); 
console.log(cc);
console.log(dd);
console.log(ee);

/* 18 DOM */
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = y[0].innerHTML;

/* PROMISE */

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);