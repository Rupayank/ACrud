/* Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.

*/

interface User {
	type: "user";
	name: string;
	age: number;
	occupation: string;
}

interface Admin {
	type: "admin";
	name: string;
	age: number;
	role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
	{
		type: "user",
		name: "Max Mustermann",
		age: 25,
		occupation: "Chimney sweep",
	},
	{
		type: "admin",
		name: "Jane Doe",
		age: 32,
		role: "Administrator",
	},
	{
		type: "user",
		name: "Kate Müller",
		age: 23,
		occupation: "Astronaut",
	},
	{
		type: "admin",
		name: "Bruce Willis",
		age: 64,
		role: "World saver",
	},
	{
		type: "user",
		name: "Wilson",
		age: 23,
		occupation: "Ball",
	},
	{
		type: "admin",
		name: "Agent Smith",
		age: 23,
		role: "Administrator",
	},
];

export const isAdmin = function (person: Person) {
	return person.type === "admin";
};
export const isUser = function (person: Person) {
	return person.type === "user";
};

export function logPerson(person: Person) {
	let additionalInformation = "";
	// if (person.type === "admin") additionalInformation = person.role;
	// else additionalInformation = person.occupation;

	switch (person.type) {
		case "admin":
			if (isAdmin(person)) {
				additionalInformation = person.role;
			}
			break;
		case "user":
			if (isUser(person)) {
				additionalInformation = person.occupation;
			}
			break;
	}
	console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(
	persons: Person[],
	criteria: { age: number }
): User[] {
	let results = [];
	persons.forEach((person) => {
		if (person.type !== "admin" && person.age === criteria.age) {
			results.push(person);
		}
	});
	return results;
}

console.log("Users of age 23:");

filterUsers(persons, {
	age: 23,
}).forEach(logPerson);
