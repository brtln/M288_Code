let library = {
    anzahlBuecher: 3200,
    anzahlRegale: 24,
    adresse: 'Bahnhofstrasse 1, 8000 Zürich',
    oeffnungszeiten: '8:00 - 18:30',
    volumen: 1200,
    baujahr: new Date('01-01-2000'),

    getBaujahr(){
        return this.baujahr.toLocaleDateString('de-CH');
    },

    getAddressAndOpeningHours(){
        return `Öffnungszeiten: ${this.oeffnungszeiten} / Adresse: ${this.adresse}`;
    },

    getAverageBooksPerRegal(){
        return this.anzahlBuecher / this.anzahlRegale;
    }
}
console.log(library.baujahr);
console.log(`Die Bib wurde erbaut am: ${library.getBaujahr()}`);
/*
console.log(library.adresse);
console.log(library.anzahlBuecher);
console.log(library.getAddressAndOpeningHours());
library.anzahlRegale=32;
console.log(`Durchschnittliche Anzahl Bücher pro Regal: ${library.getAverageBooksPerRegal()}`);*/