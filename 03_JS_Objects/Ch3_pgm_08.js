// Using dot notation to access property values

var book;

book = {
  title     : "The Hobbit",
	author    : "J. R. R. Tolkien",
	published : 1937
};

console.log(book.title);
console.log(book.author);



/* Further Adventures
 *
 * 1) Log the published property to the console.
 *
 * 2) Add a second book.
 *
 * 3) Log its details to the console.
 *
 * 4) In the console tab, at the prompt,
 *    type in book.title and press Enter.
 *    Once the program is run, object properties
 *    are available interactively via the console.
 *
 */
var book;

book = {
  title     : "The Hobbit",
  author    : "J. R. R. Tolkien",
  published : 1937
};

console.log(book.title);
console.log(book.author);
console.log(book.published);  // Step 1: Log the published property to the console

// Step 2: Add a second book
var book2 = {
  title     : "Northern Lights",
  author    : "Philip Pullman",
  published : 1995
};

// Step 3: Log its details to the console
console.log(book2.title);
console.log(book2.author);
console.log(book2.published);

/* Further Adventures */

// Step 4: In the console tab, at the prompt, type in book.title and press Enter