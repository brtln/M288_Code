//Identification
let htmlObj = document.getElementById("identification");
htmlObj.innerHTML =
    `id: ${lernender.studentid}<br>`+
    `Name: ${lernender.firstname}<br>`+
    `Vorname: ${lernender.lastname}<br>`+
    `Ausbildung: ${lernender.profession}<br>`;

//Lehrbetrieb
htmlObj = document.getElementById("lehrbetrieb");
htmlObj.innerHTML =
    `Firma: ${lernender.betrieb.firma}<br>`+
    `Kontakt: ${lernender.betrieb.kontakt}<br>`+
    `Email: ${lernender.betrieb.email}`;

//Kurse - Berufskunde
htmlObj = document.getElementById("berufskunde");
lernender.courses.berufskunde.forEach(modulid => {
    htmlObj.innerHTML += `Modul: ${modulid}<br>`;
});

let fach = "ABU-Fach";
if (lernender.BMS){
    fach = "BMS-Fach";
}
//Kurse - Allgemein Bildung
htmlObj = document.getElementById("allgemein");
let faecherListe = lernender.courses.allgemein;
for (let i=0;i<faecherListe.length;i++){
    htmlObj.innerHTML += `${fach}: ${faecherListe[i]}<br>`;
}
