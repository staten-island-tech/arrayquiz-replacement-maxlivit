const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
const fullDetail = books.map(
  (books) =>
    books.authorFirst +
    " " +
    books.authorLast +
    " wrote " +
    books.name +
    " in " +
    books.publishDate
);
console.log(fullDetail);
//Sort books from oldest to most recent
const birthOrder = books.sort(function (a, b) {
  if (a.publishDate > b.publishDate) {
    return 1;
  } else {
    return -1;
  }
});
console.table(birthOrder);
//sort books alphabetically
const alphabetically = titles.sort(function (a, b) {
  return a < b ? -1 : 1;
});
console.table(alphabetically);
//Find who wrote War and Peace
const whoWrote = books.filter(function (books) {
  if (books.name === "War and Peace") {
    console.log(books.authorFirst + " " + books.authorLast);
  }
});
//how many books were written before 1900?
const before1900 = books.filter(function (books) {
  if (books.publishDate < 1900) {
    return true;
  } else {
    return false;
  }
}).length;
console.log(before1900 + " books");

//was there at least one book published within the last 100 years?
const last100 = books.filter(function (books) {
  if (books.publishDate + 100 >= 2021) {
    console.log(
      "Yes, at least one book was published within the last 100 years."
    );
  }
});
//was every book published within the last 100 years?
const allBefore = books.filter(function (books) {
  if (books.publishDate + 100 >= 2021) {
    return true;
  } else {
    return false;
  }
}).length;
const allBefore1900 = books.filter(function (books) {
  if (allBefore.length === titles.length) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
