/*
    ===== Código de TypeScript =====
*/

// Interface 
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

// Inteface 
interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

// Extraer propiedades de la interface padre
const { name, age } = superHeroe;

// Extraer propiedades la segunda interface
const { street, country } = superHeroe.address;

// console.log("Name", name);
// console.log("Street", street+", "+country);

export { };