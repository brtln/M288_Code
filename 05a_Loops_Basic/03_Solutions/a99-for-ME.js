//Zahlen von 1 bis 100 ausgeben
/*
for(let i=0;i<=100;i++){
    console.log(i);
}

//Zahlen von 1 bis 100 addieren
let sum =0;
for(let i=0;i<=1000;i++){
    sum = sum + i;
}
console.log(sum);
*/

//Ausgabe der Namen mit einem for-Loop
/*
let me21e = ['Heidi', 'Johannes', 'Jonas', 'Cedric'];
for (let i=0;i<me21e.length;i++){
    console.log(`${me21e[i]} ist ein/eine Mediamatiker*in der Klasse ME21e.`);
    //console.log(me21e[i] +'ist ein/eine Mediamatiker*in der Klasse ME21e.');
}


let me21e = ['Heidi', 'Johannes', 'Jonas', 'Cedric'];
let i=0;
while (i<me21e.length){
    console.log(`${me21e[i]} ist ein/eine Mediamatiker*in der Klasse ME21e.`);
    i++;
}


//Geben Sie die Zahlen von 100 bis 0 mit einem Loop auf der Konsole aus.
for(let i=100;i>-1;i--){
    console.log(i);
}
 */

let i=100;
while(i>-1){
    console.log(i);
    i--;
}


//Array definieren mit 26 Kantonen
//let kantone = ['Zürich', 'Bern', ...,'Aargau','Jura'];

//Arrays mit Index ausgeben
console.log(kantone[0]);
console.log(kantone[1]);
console.log(kantone[2]);
console.log(kantone[3]);
//...
console.log(kantone[25]);

//Gleiches Arrays mit for-Loop ausgeben
for(let i = 0; i < 26; i++) {
    console.log(kantone[i]);
}

//Gleiche Ausgabe mit while
let i=0;
while(i<26){
    console.log(kantone[i]);
    i++;
}

//Gleiche Ausgabe mit for..of
//Ausgabe der Werte (iterates over property values)
for (let kanton of kantone) {
    console.log(kanton);
}

//Ausgabe nur der Indices mit for..in
// (iterates over property names)
for (let kanton in kantone) {
    console.log(kanton);
}
