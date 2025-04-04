// array

const myArr = [0, 1, 2, 3, 4]
const myHeros =["thor", "ironman"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array Methods 
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(0)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()
console.log(myArr)
console.log(typeof newArr);

// slice and Splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C", myArr);

//new methods

const marvel_heros = ["spiderman", "black panther"]
const dc_heros = ["superman", "batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]
const real_another_array = another_array.flat(2) //or use Infinity
console.log(real_another_array);

//data scrapping
console.log(Array.isArray("Ajit"));
console.log(Array.from("Ajit"));
console.log(Array.from({name: "Ajit"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));