/*
Task:
1. Create an object-literal 'person' with the properties
Anna Muster, female, born on March 1, 2002?
2. change the existing birthday output to a more human-readable version
*/

let log = console.log;

let person2 = {
    //first name
    firstName: "Anna",
    //last name
    lastName: "Muster",
    //gender
    gender: "female",
    //birthday
    birthday: new Date('2002-03-01'),
    /**
     * method get full name
     * @returns {string}
     */
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    },
    /**
     * method get birthday
     * @returns {string}
     */
    getBirthday(){
        return `${this.birthday.toLocaleDateString('en-US')}`
    }
}
/*
Sample output
weiblich
2002-03-01T00:00:00.000Z
Der Name ist Anna Muster.
Geburtstag am 1. March 2002
 */
log(`Fullname: ${person2.getFullName()}`)
log(`Birthday on the ${person2.birthday}`)
log(`Birthday on the ${person2.getBirthday()}`)
log(`Gender: ${person2.gender}`)
