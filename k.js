const person = { 
    firstName: "Goutham",
    lastNmae:"Naik",
    gender: "male"
};
//multiply no by 2 (task 3)
let pageInfo = {
    width:500,
    height:800,
    title: "my page"
    }
    let tot_sum = 0;
    for (let amount in pageInfo){
    if(typeof pageInfo[amount] == 'number') { tot_sum += pageInfo[amount];
    }
    } console.log('total amount:', tot_sum); console.log(pageInfo);

    {
        let user = {
        userName: "Goutham", 
        surname: "Naik"
        }
        user.userName="Gou";
        user.surname="Na";
        delete userName
        for(let name in user)
         { 
        console.log(user.userName);
        console.log(user.surname);

        }
    }

    let salaries = 
    {
        John: 1500,
        pete: 2000,
        vignesh:4500,
        Amy : 5000
        }
        let sum = 0;
        for(let sal in salaries)
        {
        sum = sum + (salaries [sal])
        }
        console.log('sum is: ',sum)


