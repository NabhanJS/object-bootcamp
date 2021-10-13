/* function filterByCountry(users, landsKod){
    let output = [];
    for(let i = 0; i<users.length; i++){
        if(users[i].nat == landsKod){
            output.push(users[i])

        }

    }
    return output;

}

console.log(filterByCountry(users, "FR")); */

/* function filterByGender(users, gender){
    let output = [];
    let maleUser = "Mr";
    let femaleUser = "Ms, Mrs, Miss, mademoiselle";
    for(let i = 0; i<users.length; i++){
        if(users[i].name.title === gender){
            output.push(users[i]);

        }

    }
    return output;

}

console.log(filterByGender(users, "Miss")); */

/* function listEmail(users){
    let output = [];
    for(let i = 0; i<users.length; i++){
        if(users[i].email){
            output.push(users[i].email)

        }

    }
    return output;

}

console.log(listEmail(users)); */

function letterFrequency(str) {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let num = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                num += 1;
            }

        }
        result[str[i]] = num;
    }
    return result;
}

console.log(letterFrequency("aababdbaajjs"));