//before ES6 engine this method was useed

let person={
    firstName : 'shyam',
    lastName : 'sundar',
    age: 24,
    place:'cbe',
    fullName: function()
    {
        console.log(this.firstName+this.lastName)
    }
}
console.log(person.fullName())//shyamsundar-() is needed it uses anonymous function's inputs
console.log(person.firstName)//shyam
console.log(person['lastName'])//sundar
person.age=26
console.log(person.age)//26
person.firstName='Tim Dane'
console.log(person['firstName'])//Tim Dane
person.gender="male"-//add new key-value pair
console.log(person)//whole key value pair
delete person.gender
console.log("gender" in person)//false
console.log ("age" in person)//true
//delete person.place-use to delete the mentioned key-value pair
for(let key in person)
{
    console.log(person[key])
}







