"use strict";
exports.__esModule = true;
exports.logPerson = exports.isUser = exports.isAdmin = exports.persons = void 0;
exports.persons = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
    { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
    { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];
function isAdmin(person) {
    return person.type === "admin";
}
exports.isAdmin = isAdmin;
function isUser(person) {
    return person.type === "user";
}
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = "";
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
    console.log(" - " + person.name + ", " + person.age + ", " + additionalInformation);
}
exports.logPerson = logPerson;
console.log("Admins:");
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log("Users:");
exports.persons.filter(isUser).forEach(logPerson);
