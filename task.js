/* function camelize(str)
   {
    return str
      .split('-')//string converted into array ()
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join(''); // array converted into string
    }
    console.log(camelize("background-color"));
    */
 /* let sen = "background-colour";
    let words = sen.split("-");
    let word = words.map((words, index) => index == 0 ? words : words[1].toLowerCase() + words.slice(1))
    let goutham  = word.join('');
    console.log(sen);
    console.log(words);
    console.log(word);
    console.log(goutham); */
/// task 2
let arrObj = 
[
{ name: "Shantanu", age: 27 },
{ name: "Vignesh", age: 24 },
{ name: "Priya", age: 24 },
{ name: "Goutham", age: 26 .
];

let obj = arrObj.map((item) => 
{ 
    return item.name
});
console.log(obj);


function Calculator (str) 
{
    this.add = function ()
    {
    let arr = str.split('');
    let sum = 0;
    if(arr.includes('+'))
    {
    arr.filter ((data) => data!='+' && data!='').forEach((data) => sum += Number (data));
    }
    console.log(sum);
    }
}
    let cal = new Calculator('2 + 2]);
    cal.add();







