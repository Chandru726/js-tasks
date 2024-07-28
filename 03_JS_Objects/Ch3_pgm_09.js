// Concatenating string properties

var book1;
var book2;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman"
};

console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);



/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */
var book1;
var book2;
var book3;

book1 = {
  title     : "The Hobbit",
  author    : "J. R. R. Tolkien",
  published : 1937  // Step 3: Add a third property
};

book2 = {
  title     : "Northern Lights",
  author    : "Philip Pullman",
  published : 1995  // Step 3: Add a third property
};

// Step 1: Add a third book
book3 = {
  title     : "To Kill a Mockingbird",
  author    : "Harper Lee",
  published : 1960  // Step 3: Add a third property
};

console.log(book1.title + " by " + book1.author + ", published in " + book1.published);  // Step 4: Update the messages logged to include the new property
console.log(book2.title + " by " + book2.author + ", published in " + book2.published);  // Step 4: Update the messages logged to include the new property
console.log(book3.title + " by " + book3.author + ", published in " + book3.published);  // Step 2: Log its details to the console and Step 4: Update the messages logged to include the new property
