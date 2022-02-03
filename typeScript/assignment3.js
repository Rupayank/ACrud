"use strict";
exports.__esModule = true;
exports.logPerson = exports.persons = void 0;
exports.persons = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator"
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver"
    },
];
function logPerson(person) {
    var additionalInformation = person.role
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
    console.log(" - " + person.name + ", " + person.age + ", " + additionalInformation);
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
