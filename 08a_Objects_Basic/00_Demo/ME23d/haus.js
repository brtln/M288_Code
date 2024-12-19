
let haus = {
    baujahr: new Date('01-01-1990'),
    preis: 2500000,
    anzahlZimmer: 3.5,
    flaeche: 100,
    adresse: 'Bahnhofstrasse 1, 8000 Zürich',

    getAddress(){
        return `Die Adresse lautet: ${this.adresse}.`;
    },

    getQuadratmeterPreis(){    
        return this.preis / this.flaeche;
    },
}
console.log(haus.preis);
console.log(haus.adresse);
console.log(haus.getAddress());
console.log(`Der Quadratmeterpreis ist: ${haus.getQuadratmeterPreis()}`);