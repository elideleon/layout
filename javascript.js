//literal notation

var hotel = {
	name: "california",
	rooms: 50,
	booked: 25,
	checkAvailability: function() {
		return this.rooms-this.booked;
	}
};

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


//Array in an Object
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


