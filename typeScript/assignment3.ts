interface User {}

interface Admin {
	name: string;
	age: number;
	role: string;
}

export type Person = {
	name: string;
	age: number;
	occupation?: string;
	role?: string;
};

export const persons: Person[] = [
	{
		name: "Max Mustermann",
		age: 25,
		occupation: "Chimney sweep",
	},
	{
		name: "Jane Doe",
		age: 32,
		role: "Administrator",
	},
	{
		name: "Kate Müller",
		age: 23,
		occupation: "Astronaut",
	},
	{
		name: "Bruce Willis",
		age: 64,
		role: "World saver",
	},
];

export function logPerson(person: Person) {
	let additionalInformation: string = person.role
		? person.role
		: person.occupation;
	// person.role
	// 	? (additionalInformation = person.role)
	// 	: (additionalInformation = person.occupation);
	// if (person.role) {
	// 	additionalInformation = person.role;
	// } else {
	// 	additionalInformation = person.occupation;
	// }
	console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
