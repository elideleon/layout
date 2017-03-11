/*DEEP DIVE INTO OBJECTS*/

//literal notation

var hotel = {
	name: "california",
	rooms: 50,
	booked: 25,
	checkAvailability: function() {
		return this.rooms-this.booked;
	}
};

//Using dot notation to access name propertie's value
console.log(hotel.name); // california

//Using bracket notation to access name propertie's value. Have to use qoutation marks
console.log(hotel["name"]); // california


//Setting a variable to a property
var x = 'name';
hotel[x]; // Is the same as hotel['name'] 
console.log(hotel[x]); //california


console.log("Number of rooms avaible: " + hotel.checkAvailability());

//creating many objects: constructor Notation

function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;

	this.checkAvailability = function() {
		return this.rooms-this.booked;
	};
}

var glendale = new Hotel('Glendale',100, 25);

console.log(glendale.name);

var fruit = ['oranges', 'apples','grapes'];
console.log("my favorite fruit is " + fruit[0]);

fruit [0] = 'cucumber';

console.log("my favorite fruit is " + fruit[0]);


for(var i=0; i<fruit.length; i++ ){
	console.log(fruit[i]);
};



function windowSize(){
	var width = this.innerWidth;
	var height = this.innerHeight;
	return [height, width];
}

console.log(windowSize());

var width = 600;
var shape = {width:300};
var showwidth  = function() {
	document.write("width of this window: " + this.width);

};
showwidth();

function People(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;

	this.speak = function() {
		console.log("hi my name is " + this.name + ".")
	};
}

var robert = new People("Robert", 24, "male");
var sarah = new People("Sarah", 31, "unknown");
var candice = new People("Candice", 34, "female");


//Array in an Object. Similar to Json 
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
           "television"]
};


//Objects in an Array
var journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break",
            "peanuts", "beer"],
   squirrel: true},
  /* and so on... */
];




// for..in loops through properties of object
var person = {
	fname:"John", 
	lname:"Doe", 
	age:25
}; 

for (x in person) {
    

    console.log("key:" + x + "  Value:" + person[x]); //notice the lack of qoutation marks normally needed to iterate though values
    												// Sqaure brackets allow use of variables


}

//Another way to create an instance of an object
//Object.create

var person = {
  kind: 'person',
  height: 6,
  age: 69
}

// creates a new object which prototype is person. Set age to 13
var zack = Object.create(person, {age: {value:  13} });
  
console.log("Value of person property for object zack: " + zack.kind); // => ‘person’



console.log("Value of age property for object zack: " + zack.age); // => ‘13’

//Getting prototype of object 

console.log(Object.getPrototypeOf(zack)); //=> true //Doesnt seem to return correct prototype, only boolean value
//or returns properties and values of its prototype and alot of other info ????

console.log(zack.__proto__); // Same output as Object.getPropertypeOf(zack));

console.log(zack.constructor); //ouputs 'function Object() { [native code] }'



//USING SAME METHODS AS ABOVE ON INSTANCES CREATED THROUGH CONSTRUCTORS INSTEAD OF Object.create
//Completely different results

console.log(Object.getPrototypeOf(glendale)); //Returns correct constructor name, but not correct prototype

console.log(glendale.__proto__); //Same as above

console.log(glendale.constructor); // Returns complete constructor properties and values








