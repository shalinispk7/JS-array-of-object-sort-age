// Sort an array of JavaScript objects based on age

let employees = [
{
firstName: 'John',
lastName: 'Doe',
age: 27,
joinedDate: 'December 15, 2017'
},
{
firstName: 'Ana',
lastName: 'Rosy',
age: 25,
joinedDate: 'January 15, 2019'
},
{
firstName: 'Zion',
lastName: 'Albert',
age: 30,
joinedDate: 'February 15, 2011'
},
{
firstName: 'Zion',
lastName: 'Albert',
age: 21,
joinedDate: 'February 15, 2011'
}
];

// using arrow function
// employees.sort((a,b)=>(a.age - b.age))
// console.log(employees)

let result=employees.sort(function(a,b){
	return a.age-b.age;
});
document.write("Sorting based on ages: "+"<br>")
document.write(JSON.stringify(result))

