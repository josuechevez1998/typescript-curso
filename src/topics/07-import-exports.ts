import { Product, TaxCalculationOptions } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [total, tax] = TaxCalculationOptions({
    tax: 0.15,
    productos: shoppingCart
});

// console.log('Total', total);
// console.log('Tax',tax);
