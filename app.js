const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
//'FETCH' returns a promise
fetch(endpoint).then(blob =>
  blob
    .json()
    //push into empty array, using 'SPREAD' method so we log data into array rather than nesting array if we just used the 'push.()' method on its own
    .then(data => cities.push(...data))
);

//run a function that will take massive array a filter it down to a subset

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we figure out if the city or state matches what we search
    const regularExpression = new RegExp(wordToMatch, "gi");
    //The RegExp constructor creates a regular expression object for matching text with a pattern.
    return (
      place.city.match(regularExpression) ||
      place.state.match(regularExpression)
    );
  });
}

//function numberWithCommas(x) {
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//display function

function displayMatches() {
  // console.log(this.value);
  //pass the search value into the 'findMatches' function to find cities or state that match
  const matchArray = findMatches(this.value, cities);
  // now output html
  const html = matchArray
    .map(place => {
      const regex = new RegExp(this.value, "gi");
      //replace what every it matches with a highlight span
      const cityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      const stateName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      return `<li>
    <span class='name'>${cityName}, ${stateName}</span>
    <span class='population'>${numberWithCommas(place.population)}</span>
    </li>`;
      //turn a array with multiple items into one big array
    })
    .join("");
  suggest.innerHTML = html;

  console.log(matchArray);
}

const searchinput = document.querySelector(".search");
const suggest = document.querySelector(".suggestions");

searchinput.addEventListener("change", displayMatches);
searchinput.addEventListener("keyup", displayMatches);
