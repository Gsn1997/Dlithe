const numberButtons = document.querySelectorAll("[data-number]");

const operationButtons = document.querySelectorAll("[data-operation]");

const equalsButton = document.querySelector("[data-equals]");

const deleteButton = document.querySelector("[data-delete]");

const allClearButton = document.querySelector("[data-all-clear]");

const currentScreenTextElement = document.querySelector(
  "[data-operand-current]"
);

const previousScreenTextElement = document.querySelector(
  "[data-operand-previous]"
);


/* let calculator = 
{
    no1:0,
    no2:0,
    read: ()=>
{
    no1 = prompt('First Number'); 
    no2 = prompt('Second Number'); 
    console.log(no1,':', no2);
},
    add: ()=>{
    // prompt('sum: ',this.no1+this.no2); 
    console.log(Number (no1) + Number (no2));
    },
    multiply: ()=>{
    // prompt('multiply:',this.nol this.no2); 
    console.log(Number (no1)*Number (no2));
    }
}
    calculator.read();
    calculator.add();
    calculator.multiply();
 */


   /* let calculator =
    {
       num1:0,
       num2:0,
       read: function()
       {
       this.num1-parseInt(prompt("Enter first Number")); 
       this.num2=parseInt(prompt("Enter second Number")); 
       console.log(this.num1, this.num2);
       },
       add: function()
       {
       let addition =
       this.num1+this.num2; 
       console.log("addition"+addition);
       }
       calculator.read(),
       calculator.add();
    } */