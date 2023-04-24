// Exclaim Word
// This function will be called with a string and should return the string in upper case with an exclamation mark (!) added to the end of the string.
// Examples:
   
function exclaimWord(word) {
    return word.toUpperCase()+"!"
      }
// exclaimWord('bang'); // returns 'BANG!'
// exclaimWord('cool'); // returns 'COOL!'

// ================================================================================================
// This function should take an array and return a new array containing the first and last item from the input array.
// The function should return an array with the same values as the original, if the original has two or fewer items.
// Examples:
function getFirstAndLast(array) {
    if(array.length > 1  ) return [array[0],array[array.length - 1]]
    else return array
}
// getFirstAndLast(['a', 'b', 'c', 'd', 'e', 'f']);
// // should return ['a', 'f']
// getFirstAndLast([42, 100, 25, -3]);
// // should return [42, -3]
// getFirstAndLast([10, 50]);
// // should return [10, 50]
// getFirstAndLast([5]);
// should return [5]
// ================================================================================================
// Create Sentence
// This function should take an object with three properties: name, age and job.
// It should return a string in the format shown below:
// "Hello my name is <name>, I am <age> years old and I am a <job>".
// Examples:
function createSentence(obj) {
    console.log(obj)
      return `Hello my name is ${obj.name}, I am ${obj.age} years old and I am a ${obj.job}`
        }
// createSentence({ name: 'Mitch', age: 29, job: 'tutor' });
// // should return "Hello my name is Mitch, I am 29 years old and I am a tutor"
// createSentence({ name: 'Frankie', age: 31, job: 'software engineer' });
// // should return "Hello my name is Frankie, I am 31 years old and I am a software engineer"

// ================================================================================================
// Find Total Age
// This function will be called with an array of objects. Each object represents a person and will contain an age property. The function should return the total age of all the people in the array.
// A typical people array will look as follows:
// [   {    name: 'Sam',    age: 30,  },  {    name: 'Anat',    age: 22,  },  {    name: 'Jonny',    age: 32,  },];
// Examples:
function findTotalAge(array) {
    return array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.age;
    }, 0);
  }
// findTotalAge([]); // should return 0
// findTotalAge([{ name: 'Sam', age: 31 }]); // should return 31
// findTotalAge([
//   { name: 'Sam', age: 20 },
//   { name: 'Anat', age: 30 },
//   { name: 'Alex', age: 40 },
// ]);
// should return 90
// ================================================================================================
// Count The Characters
// This functions takes a string and a character, and returns the number of times this character is found within the string.

// The string will only contain lowercase letters and the character you are being asked to count will always be lowercase.

// Examples:
function countTheCharacters(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === char) {
        count++;
      }
    }
    return count;
  }

// countChars('hello', 'l') --> 2
// countChars('hello world', 'l') --> 3
// countChars('hello world', 'z') --> 0
// countChars('hello world', 'e') --> 1
// ================================================================================================
// Only the Oddest
// This function will be passed an array of numbers, and should return an array containing all the odd numbers from the input array that are also found at an odd index.

// The order of the numbers should be retained.

// Examples:
function onlyTheOddest(array) {
    return array.filter((element, index) => index % 2 !== 0 && element % 2 !== 0);
  }
// onlyTheOddest([6, 7, 12, 49])
// // should return [7, 49]
// onlyTheOddest([1, 3, 5, 7, 9, 11])
// // should return [3, 7, 11]
// onlyTheOddest([1, 6, 13, 8, 29, 50])
// // should return []
// // ================================================================================================
// All Oscar Winners
// This function will be called with an array of film objects. It should check that every film in the array has won an oscar.

// If there is at least one film where the wonOscar property is false then the function should return false overall. Otherwise, if every film has won an oscar then the function should return true.

// A typical array of films will look as follows:

// [
//   {
//     title: 'Forrest Gump',
//     wonOscar: true,
//   },
//   {
//     title: 'Moonlight',
//     wonOscar: true,
//   },
//   {
//     title: 'No Country for Old Men',
//     wonOscar: true,
//   },
// ];
// Examples:
function allOscarWinners(films) {
    films.filter((element, index) => {
      if(element.wonOscar !== true) {
        return false;
      }else{
        return true;
      }
    })
  }

// allOscarWinners([{ title: 'Forrest Gump', wonOscar: true }]);
// // should return true;
// allOscarWinners([{ title: 'Ghost World', wonOscar: false }]);
// // should return false
// allOscarWinners([
//   {
//     title: 'Forrest Gump',
//     wonOscar: true,
//   },
//   {
//     title: 'Moonlight',
//     wonOscar: true,
//   },
//   {
//     title: 'No Country for Old Men',
//     wonOscar: true,
//   },
// ]);
// // should return true
// allOscarWinners([
//     {
//         title: "Forrest Gump", wonOscar: true
//     },
//     {
//         title: "Moonlight", wonOscar: true
//     },
//     {
//         title: "The Breadwinner", wonOscar: false
//     }
//     {
//         title: "No Country for Old Men", wonOscar: true
//     }
// ]
// );
// // should return false
// ================================================================================================
// Gather Pets
// This function will be called with an array of objects. Each object represents an owner and will have a pets property, which will be an array of pet names. The function should return an array of all the pets' names.

// If passed an empty array the function should return an empty array.

// A typical array of owners is shown below:

// [
//   {
//     name: 'Malcolm',
//     pets: ['Bear', 'Minu'],
//   },
//   {
//     name: 'Caroline',
//     pets: ['Basil', 'Hamish'],
//   },
// ];
// Examples:

// gatherPets([]); // should return []
// gatherPets([{ name: 'Malcolm', pets: ['Bear', 'Minu'] }]);
// // should return ['Bear', 'Minu']
// gatherPets([
//   { name: 'Malcolm', pets: ['Bear', 'Minu'] },
//   { name: 'Caroline', pets: ['Basil', 'Hamish'] },
// ]);
// // should return ['Bear', 'Minu', 'Basil', 'Hamish']
// ================================================================================================

// ================================================================================================

// ================================================================================================