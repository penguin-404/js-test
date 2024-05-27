const marvelHeros = ["Thor","IronMan","SpiderMan"]
const dcHeros = ["Superman","Batman","Flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// Not good practice

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);


// Using a spread Operator
const all_new_heros = [...marvelHeros,...dcHeros]
// console.log(all_new_heros);

const anotherArray  = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_another_array = anotherArray.flat(Infinity)

console.log(usable_another_array);

console.log(Array.isArray(marvelHeros));
console.log(Array.from("Ram")); 
console.log(Array.from({name: "Shyam"})); // Interesting situation. Should define what to make array either key or value.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

