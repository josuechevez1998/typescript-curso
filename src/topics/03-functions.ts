function addNumbers(a: number, b: number): number {
    return a + b;
}

function addNumbersArrow(a: number, b: number): string {
    return `${a + b}`;
}

const resultNumber: number = addNumbers(2, 2);
const resultString: string = addNumbersArrow(2, 1);

console.log(resultNumber, resultString);
