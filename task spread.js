/* const showName = (firstName, lastName, ...args) =>{
let name = firstName+""+" "+lastName+"";
for(let title of args) {
    name+=title +"";
}
return name;
}
console.log(showName('Goutham' , 'S', 'Gadag', 'from karnataka')); */

/* function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator"); */

/* const heroes = ['Batman', 'Superman'];
const villains = ['Joker', 'Bane'];
const all = [...heroes, ...villains]; */
let veggie = ['tamato', 'onion'];
let nonveg = ['chicken','fish'];
let sandwich2 = [...veggie, ...nonveg,];
console.log(sandwich2); // 'tamato', 'onion', 'chicken', 'fish']