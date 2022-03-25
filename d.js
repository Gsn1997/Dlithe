 {

    let form = document.forms['cal-form'];

  
    function calculate(e) {
      //prevent default form submission
      e.preventDefault();
      //get form values

      let num1 = parseInt(document.getElementsByTagName('input')[0].value);
      let num2 = parseInt(document.getElementsByTagName('input')[1].value);
      let op = document.getElementsByTagName('select')[0].value;
  
      //create object constructor function
      function Calculate(num1, num2, op){
        this.num1 = num1;
        this.num2 = num2;
        this.op = op;
      } 
  
      Calculate.prototype.result = function() {
        let res;
        switch (op) {
          case 'add':
            res = this.num1 + this.num2;
            break;
          case 'sub':
            res = this.num1 - this.num2;
            break;
          case 'mul':
            res = this.num1 * this.num2;
            break;
          case 'div':
            res = this.num1 / this.num2;
            break;
          default:
            res= 'Error! No operation selected.';
        }
        return res;
      };
  
      //create an object
      let cal = new Calculate(num1, num2, op);
      //display result
      document.getElementById('result').innerHTML = cal.result();
  
    }
  };