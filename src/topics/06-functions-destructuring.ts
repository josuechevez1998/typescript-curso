// interface con exportacion
export interface Product {
    description: string;
    price: number
}

// definir productos
const phone: Product = {
    description: 'Alcaltel G3',
    price: 150.0
}

const tablet: Product = {
    description: 'HP S3',
    price: 200
}

// definir interface de compras
interface TaxCalculationOptions {
    tax: number;
    productos: Product[]; // Array de tipo productos
}

export function TaxCalculationOptions(options:TaxCalculationOptions) : number[] {
    let total = 0;

    options.productos.forEach(producto => {
        const { price } = producto;
        total += price
    });

    const { tax } = options;
    return [total, total * tax];
}

const shoppingCart = [ phone, tablet ];
const tax = 10.50;

const shopping:TaxCalculationOptions = {
    tax,
    productos: shoppingCart,
}

const calculation = TaxCalculationOptions(shopping);
console.log(calculation);
