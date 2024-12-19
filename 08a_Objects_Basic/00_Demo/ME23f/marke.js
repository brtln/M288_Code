
let marke = {
    name: "Nike",
    country: "Deutschland",
    gruendungsjahr: new Date('01.01.1990'),
    productCategory: "Clothing",
    anzahlProdukte: 234000,

    getBrandInformation(){
        return `${this.name} ist ein Brand aus ${this.country}`;
    },

    getProductInformation(){
        return `${this.name} hat ${this.anzahlProdukte} Produkte in der Kategorie ${this.productCategory}.`;
    },
}

// Datum formatieren:
console.log(marke.gruendungsjahr.toLocaleDateString('de-CH'));


console.log(marke.productCategory);
console.log(marke.getBrandInformation());