export class Person {
    public name?: string;
    public address?: string;

    constructor(name:string, address:string) {
        this.name = name;
        this.address = address;
    }
}

// CLASE QUE EXTENDIEN OTRA CLASE
// export class Hero extends Person {
    
//     constructor(
//         public alterEgo: string,
//         public age:number,
//         public realName: string,
//     ){
//         /**
//          * Enviar datos la clase extendida
//          */
//         super(realName, 'New York')
//     }

// }

export class Hero{
    
    constructor(
        public alterEgo: string,
        public age:number,
        public realName: string,
        public person:Person
    ){
        // Sin datos
    }

}

const person = new Person('Tony Stark', 'New York');
const iroman = new Hero('Iroman', 24, 'Tony', person);
console.log(iroman);
