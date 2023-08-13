const person = {
    firstName: "Navid",
    lastName: "Ostad",
    age: 22,
    gender: "Male",
    occupation: "Software Developer"
};

function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
        return false;
    }

    for (const key in obj) {
        console.log(`${key} : ${obj[key]} `);
    }
}

printObjectProperties(person);