// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

//  Array.prototype.filter()
// * 1. Filter the list of inventors for those who were born in the 1500's

/* const fifteen = inventors.filter(inventor => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; //keep it!
  }
}); */

// * FILTER 'The filter() method creates a new array with all elements that pass the test implemented by the provided function.'

const fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);

console.log(fifteen);

//  Array.prototype.map()
// * 2. Give us an array of the inventors' first and last names

const fullNames = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);

// Array.prototype.sort()
// * 3. Sort the inventors by birthdate, oldest to youngest
// The sort() method sorts the elements of an array in place and returns the sorted array.

// const ordered = inventors.sort((firstPerson, secondPerson) => {
//   if (firstPerson.year > secondPerson.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.log(ordered);

// Array.prototype.reduce()
// * 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

//861

// * 5. Sort the inventors by years lived

const oldest = inventors.sort((firstItem, secondItem) => {
  const firstGuy = firstItem.passed - firstItem.year;
  const secondGuy = secondItem.passed - secondItem.year;
  return firstGuy > secondGuy ? -1 : 1;
});

console.log(oldest);

// * 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const gategory = document.querySelector(".mw-category");
const links = Array.from(gategory.querySelectorAll("a"));

const de = links
  .map(link => link.textContent)
  .filter(streetName => streetName.includes("de"));

//returns

//(12) ["Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard de Rochechouart", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard de la Zone"]`Ω

// * 7. sort Exercise
// Sort the people alphabetically by last name
const alphabetically = people.sort((lastOne, nextOne) => {
  const [last, first] = lastOne.split(", ");
  const [blast, bfirst] = lastOne.split(", ");
  return last > blast ? 1 : -1;
});
console.log(alphabetically);

//(41) ["Blake, William", "Blair, Tony", "Blair, Robert", "Black, Elk", "Birrell, Augustine", "Biondo, Frank", "Billings, Josh", "Biko, Steve", "Bierce, Ambrose", "Biden, Joseph", "Bevel, Ken", "Bevan, Aneurin", "Bethea, Erin", "Berry, Wendell", "Berry, Halle", "Berra, Yogi", "Bernhard, Sandra", "Berne, Eric", "Berlin, Irving", "Berle, Milton", "Berio, Luciano", "Bergman, Ingmar", "Berger, Ric", "Bentsen, Lloyd", "Bent, Silas", "Benson, Leana", "Bennington, Chester", "Benn, Tony", "Benjamin, Walter", "Ben-Gurion, David", "Benenson, Peter", "Benchley, Robert", "Bellow, Saul", "Belloc, Hilaire", "Begin, Menachem", "Beethoven, Ludwig", "Beecher, Henry", "Beddoes, Mick", "Beckett, Samuel", "Becker, Carl", "Beck, Glenn"]

// * 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const transportation = data.reduce((object, item) => {
  // first run set object[item] = 0
  if (!object[item]) {
    object[item] = 0;
  }
  object[item]++;
  return object;
}, {});

console.log(transportation);

// RETURNS

//{car: 5, truck: 3, bike: 2, walk: 2, van: 2}
