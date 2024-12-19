/*
Task:
1. Create an object-literal 'person' with the properties
Anna Muster, female, born on March 1, 2002?
2. change the existing birthday output to a more human readable version
*/

let person2 = {
    //first name
    firstName: "Anna",//??
    //last name
    lastName: "Muster",//??
    //gender
    gender: "female",//??
    //birthday
    birthday: new Date("2002-03-01"),//??

    /**
     * method get full name
     * @returns {string}
     */
    getFullName(){//??
        return `${this.firstName} ${this.lastName}.`//??
    },//??
    /**
     * method get birthday
     * @returns {string}
     */
    getBirthday(){//??
        return `${this.birthday.toLocaleDateString('de-CH')}`;//??
    }//??
}
/*
Sample output
weiblich
2002-03-01T00:00:00.000Z
Der Name ist Anna Muster.
Geburtstag am 1. March 2002
 */
console.log(`Gender ${person2.gender}`);//??
console.log(`My name is ${person2.getFullName()}`);//??
console.log(`Birthday ${person2.birthday}`);//??
console.log(`Birthday ${person2.getBirthday()}`);//??
