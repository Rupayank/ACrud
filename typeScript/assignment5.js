"use strict";
/* Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.

*/
exports.__esModule = true;
exports.filterUsers = exports.logPerson = exports.isUser = exports.isAdmin = exports.persons = void 0;
exports.persons = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        type: "admin",
        name: "Jane Doe",
        age: 32,
        role: "Administrator"
    },
    {
        type: "user",
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
    {
        type: "admin",
        name: "Bruce Willis",
        age: 64,
        role: "World saver"
    },
    {
        type: "user",
        name: "Wilson",
        age: 23,
        occupation: "Ball"
    },
    {
        type: "admin",
        name: "Agent Smith",
        age: 23,
        role: "Administrator"
    },
];
var isAdmin = function (person) {
    return person.type === "admin";
};
exports.isAdmin = isAdmin;
var isUser = function (person) {
    return person.type === "user";
};
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = "";
    // if (person.type === "admin") additionalInformation = person.role;
    // else additionalInformation = person.occupation;
    switch (person.type) {
        case "admin":
            if ((0, exports.isAdmin)(person)) {
                additionalInformation = person.role;
            }
            break;
        case "user":
            if ((0, exports.isUser)(person)) {
                additionalInformation = person.occupation;
            }
            break;
    }
    console.log(" - " + person.name + ", " + person.age + ", " + additionalInformation);
}
exports.logPerson = logPerson;
function filterUsers(persons, criteria) {
    var results = [];
    persons.forEach(function (person) {
        if (person.type !== "admin" && person.age === criteria.age) {
            results.push(person);
        }
    });
    return results;
}
exports.filterUsers = filterUsers;
console.log("Users of age 23:");
filterUsers(exports.persons, {
    age: 23
}).forEach(logPerson);
