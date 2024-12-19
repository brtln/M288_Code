/*
Task: Mark Tool for linear grade calculation
a) Program a function that determines a grade based
on the achieved points with a linear grade scale. The formula is
     Grade = (points achieved / max points) * 5 + 1
b) Add a text to the grade as follows:
If the grade is >= 4.0, then the grade is 'sufficient',
otherwise 'unsatisfactory'.
c) Implement the tool user-friendly, i.e.

λ node a01-A.js
=========================================
Mark tool
=========================================

(C)alculate or (E)xit? c
What are maximum achievable points? 21
How many points has achieved the student? 9
You achieved 9 of 21 points and an insufficient mark 3.14!
(C)alculate or (E)xit? c
What are maximum achievable points? 11
How many points has achieved the student? 18
You achieved 18 of 11 points and a sufficient mark 9.18!
(C)alculate or (E)xit? e
Exit manager ..

*/
const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

let title = '=========================================\n' +
    `Mark tool\n` +
    '=========================================\n';

function linearGradeScala(points, maxPoints) {//??
    let note = (points / maxPoints) * 5 + 1;//??
    let msg;//??
    //determine text if sufficient or insuffcient mark
    if (note >= 4.0) {//??
        msg = 'a sufficient';//??
    } else {//??
        msg = 'an insufficient'//??
    }//??

    return `You achieved ${points} of ${maxPoints} points and ${msg} ` +//??
        `mark ${note.toFixed(2)}!`;//??
}//??

console.log(title);

function menu() {
    //Calculate or Exit
    let ans = askQuestion("(C)alculate or (E)xit? ");//??
    ans.then(data => {//??
        let msg = 'Unknown operation!';//??
        let value = data.toUpperCase();//??
        //switch
        switch (value) {//??
            //case C
            case 'C'://??
                //ask for max. points
                ans = askQuestion("What are maximum achievable points? ");//??
                ans.then(data => {//??
                    let maxPoints = parseFloat(data);//??
                    //ask for achieved points by the student
                    ans = askQuestion("How many points has achieved the student? ");//??
                    ans.then(data => {//??
                        let points = parseFloat(data);//??
                        console.log(linearGradeScala(points, maxPoints));//??
                        //call menu again
                        menu();//??
                    });//??
                });//??
                break;//??
            //case E
            case 'E'://??
                msg = 'Exit manager ..';//??
                console.log(msg);//??
                return 0;//??
            //case default
            default://??
                value = 'n/a';//??
                console.log(msg);//??
                return 2;//??
        }//??
    });//??
}

//call menu
menu();
