/* let person = {
    name: "Alle",
    email: "kalle@yahoo.com",
    job: "teacher"
} */

/* console.log(person.email); */

/* const people = [
    {
        name: "Alu",
        email: "alu@yahoo.com",
        job: "eating food"
    }, 
    {
        name: "tomato", 
        email: "tomato@gmail.com",
        job: "not eating food",
        address: {
            gata: "Villavägen",
            ort: "Haninge"
        }

    },
    {
        name: "Khalu",
        email: "khalu@yahoo.com",
        job: "not eating food",
        favoritColors: ["Red", "Blue"]

    }

]
 */
/* console.log(people[1].address.ort);
console.log(people[2].favoritColors[1]); */

/* let newObject = {};
console.log(newObject);
newObject.name="Kamal"
console.log(newObject.name);

newObject["age"] = 23;
console.log(newObject.age); */

/* const result = {}
const keys = "abcdef";

for(let key of keys){
    result[key] = 1;

}
console.log(result);
 */

let person = {
    name: "Salam",
    job: "Minister"
}

let convertToJSON = JSON.stringify(person);
console.log(convertToJSON);

let convertToNormal =JSON.parse(convertToJSON);
console.log(convertToNormal);
