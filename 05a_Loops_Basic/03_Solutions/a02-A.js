/* Task: Compute the average of marks
Sample output
$ node a03-A.js 4.5 5.5 3.5 4.1
The average of these marks 4.5,5.5,3.5,4.1 is 4.4!
 */
//Read arguments on the CLI
let marks= process.argv.slice(2);//??
let sum = 0.0;//??

for(let i=0;i<marks.length;i++){//??
    sum+= parseFloat(marks[i]);//??
}//??
console.log(`Notendurchschnitt ist ${sum/marks.length}`);//??
