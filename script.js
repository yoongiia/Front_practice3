// Фібоначі
const findFibonacci = (n) => {
    if (n === 0 || n === 1) return n;
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
console.log(findFibonacci(8))
// Фільтр
const filter = (array, handler)=> {
    const filtered = [];
    array.forEach((element) => {handler(element) ? (filtered.push(element)): null});
    return filtered;
  } 
// pow
const pow = (x, n) => n == 1 ? x : x * pow(x, n - 1);
console.log(pow(8, 2))
// powList
const powList = (array, x)=> array.map((num)=>pow(num,x))

const array = [1,2,3,4,5]
console.log(powList(array,2))
// powAndFilter
const powAndFilter = (array, x, minNumber) => filter(powList(array, x), (number) => number < minNumber)
console.log(powAndFilter(array, 2, 10))
// sum
const sum = (handler) => () =>{
    const numbers = handler();
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}
const arr = ()=>[1,2,3,4,5]
const calc = (sum(arr))
console.log(calc())