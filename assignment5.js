class Vehicle {
	constructor(latitude, longitude) {
		this.latitude = latitude;
		this.longitude = longitude;
	}
	goNorth() {
		this.longitude++;
	}
	goSouth() {
		this.longitude--;
	}
	goEast() {
		this.latitude++;
	}
	goWest() {
		this.latitude--;
	}
}

class Car extends Vehicle {
	toString() {
		console.log(
			`Latitude is: ${this.latitude} & longitude is: ${this.longitude}`
		);
	}
}

let myCar = new Car(1, 2);
myCar.goEast();
myCar.goEast();
myCar.toString();
console.log(myCar);
// prototype inheritance
