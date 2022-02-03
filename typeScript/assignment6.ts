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
	{ type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
	{ type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
	{ type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
	{ type: "user", name: "Wilson", age: 23, occupation: "Ball" },
	{ type: "admin", name: "Agent Smith", age: 23, role: "Anti-virus engineer" },
];

// export function getObjectKeys(criteria?: Person): void;
// export function getObjectKeys(criteria?: Person): string[] {
// 	if (criteria !== undefined) return Object.keys(criteria);
// 	else console.log("No criteria defined");
// }
const getObjectKeys = (obj: Partial<Person>) => Object.keys(obj);
// getObjectKeys();
// getObjectKeys(persons[1]);

export function logPerson(person: Person) {
	let additionalInformation = "";
	// if (person.type === "admin") additionalInformation = person.role;
	// else additionalInformation = person.occupation;

	switch (person.type) {
		case "admin":
			additionalInformation = person.role;
			break;
		case "user":
			additionalInformation = person.occupation;
			break;
	}
	console.log(`- ${person.name}, ${person.age}, ${additionalInformation}`);
}
export function filterPersons(
	persons: Person[],
	personType: "user",
	criteria: Partial<Omit<User, "type">>
): User[];
export function filterPersons(
	persons: Person[],
	personType: "admin",
	criteria: Partial<Omit<Admin, "type">>
): Admin[];
export function filterPersons(
	persons: Person[],
	personType: string,
	criteria: Partial<Person>
): Person[] {
	return persons
		.filter((person) => person.type === personType)
		.filter((person) => {
			let criteriaKeys = getObjectKeys(criteria);
			return criteriaKeys.every((fieldName) => {
				return person[fieldName] === criteria[fieldName];
			});
		});
}

export const usersOfAge23 = filterPersons(persons, "user", { age: 23 });
export const adminsOfAge23 = filterPersons(persons, "admin", { age: 23 });

console.log("Users of age 23:");
usersOfAge23.forEach(logPerson);

console.log();

console.log("Admins of age 23:");
adminsOfAge23.forEach(logPerson);
