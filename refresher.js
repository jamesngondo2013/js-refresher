var a = 1;
var b = "Hello, world!";
var c = 1.234;
var d = null;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function test1(x, y) {
	return (x + y) * (x - y);
}

console.log(test1(2, 3));

var test2 = function(x, y) {
	return (x + y) / (x - y);
}

console.log(test2(2, 3));

var car = {
	make: "Skoda"
	, model: "Octavia"
};

console.log("The car is a " + car.make + " " + car.model + ".");

var van = {
	make: "Ford"
	, model: "Transit"
	, full_name: function() {
		return this.make + " " + this.model;
	}
};

console.log("The van is a " + van.full_name() + 	".");

var numbers = [1,2,3,4];
//}


for (var i = 0; i < numbers.length; i++) {
	console.log(i * i);
	if (1 < 2) {
		console.log("The world is OK.");
	} else {
		console.log("The world is not OK.");
	}
}

// Create a function in refresher.js that takes a single integer argument, squares it, adds two, and returns that value (x -> x^2 + 2).
// Test that the function works by applying it to the value 8 and outputting the result to the console.

function square(value)
{
	var sum = (Math.pow(value,2) + 2);
	return sum;
	//console.log(square(2));
}
console.log(square(4) + " Squared value, adds 2");


//Create an array of the even numbers from 1 to 60 -Apply the function to the list of numbers, outputting the result to the console.

function isEven() {
	var evenNum = new Array(60);

	for(var i=1;i<=60;i++)
	{
		var num =i;
		if (num %2 == 0)
		{
			evenNum.push(num);
			console.log(num );
		}

	}

}
console.log(isEven());


//Create an object called connection that has two properties: ip_address and port.
//Add a method to the object called change_port() that takes a single argument, a port number, and changes the port property to that value.

var connection = {ip_address: "127.0.0.1",
	              port: "8000",
	              changePort: function(portNumber)
				  {
					  return portNumber;
					  //console.log(portNumber);
				  }

};
console.log("IP Address: " + connection.ip_address);
console.log("Port: " + connection.port);
console.log("New Port: " + connection.changePort( "8080"));



//Advanced
//Use a constructor function to create a list of 100 connection objects, each with a random port and random (valid) IP address.

var book = new Object();

for(var i =0; i<100; i++)
{
	book.name = "Web " + i;
	console.log(book.name);

}


