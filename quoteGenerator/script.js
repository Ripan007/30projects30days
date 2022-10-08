let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

let quotes = [
  {
    quote: `"Don't comment bad code - rewrite it."`,
    person: `Brian Kernighan`,
  },
  {
    quote: `" Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code."`,
    person: `Dan Salomon`,
  },
  {
    quote: `"It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive."`,
    person: `Steve McConnell`,
  },
  {
    quote: `"Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."`,
    person: `Rajanand`,
  },
  {
    quote: `"Measuring programming progree by lines of code is like measuring aircraft building progree by weight."`,
    person: `Bill Gates`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
