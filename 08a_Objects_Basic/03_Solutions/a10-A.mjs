/*
Class Employee
*/
class Employee{//??
    //first name;
    firstName;//??
    //last name;
    lastName;//??
    //gender;
    gender;//??
    //birthday;
    birthday;//??
    //profession with default value
    profession = "No profession set!";//??
    //salary protected
    _salary = 0;//??
    //criminalCheckPassed private
    #criminalCheckPassed=true;//??

    /**
     * constructor
     * @param firstName
     * @param lastName
     * @param gender
     * @param birthday
     */
    constructor(firstName, lastName, gender, birthday) {//??
        this.firstName = firstName;//??
        this.lastName = lastName;//??
        this.gender = gender;//??
        this.birthday = birthday;//??
    }

    /**
     * Check password (private)
     * @param passw
     * @returns {boolean}
     */
    #checkPassword(passw){
        return passw === "1234";
    }

    /**
     * get full name method
     * @returns {string}
     */
    getFullName(){
        return `${this.firstName}, ${this.lastName}.`
    }

    /**
     * getter gender
     * @returns {string}
     */
    get gender(){
        return `${this.gender}`;
    }

    /**
     * getter profession
     * @returns {string}
     */
    get profession(){
        return `${this.profession}`;
    }

    /**
     * setter profession
     * @param prof
     */
    set profession(prof) {
        this.profession = prof;
    }

    /**
     * get salary with password check
     * @param passw
     * @returns {number|string}
     */
    getSalary(passw){
        if (this.#checkPassword(passw)){
            return this._salary;
        } else {
            return "Access denied!"
        }
    }
}

export default Employee;

