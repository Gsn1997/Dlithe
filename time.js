/* // program to display time every 3 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
     setTimeout(showTime, 3000);
}

// calling the function
showTime(); */

/* const printNumbers = (from, to) =>{
    let stop=setInterval(() => {
     if(from<=to) { 
         console.log(from);
    from++;
    }else{
    clearInterval(stop);
    }
    }, 
    [1000]);
    }
printNumbers (1,5); */

/* function printNumber(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  for (var i = 1; i <= 5; i++) 
  printNumber(i); */

/*   function printNumber(i) {
       setTimeout(() => 
    { console.log(i);
  }, i * 1000);
  }
  for (var i = 1; i <= 5; i++) 
  printNumber(i);
 */

/*   function printNumbers (from, to)
{ for (let i = from; i <= to; i++) 
    { setTimeout(() => {console.log(i);}, i* 1000);}
}
    printNumbers (1, 5); */


    let i = 0;
    setTimeout(() => alert(i), 1000); // ?
    // assume that the time to execute this function is >100ms
    for(let j = 0; j < 100; j++) 
    {
    i++;
    }