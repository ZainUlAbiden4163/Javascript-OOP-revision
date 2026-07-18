function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, "");
}

export default class Library {
  constructor(libraryName, books = []) {
    this.libraryName = libraryName;
    this.books = books;
  }
}

Library.prototype.addBook = function (book = {}) {
  this.books.push(book);
  return `${book.title} book is succefully Added`;
};
Library.prototype.removeBook = function (isbn) {
  const book = this.findBook(isbn);
  if (!book) {
    return "Book not Found";
  }
  this.books = this.books.filter((book) => book.isbn !== isbn);
  return `${book.title} removed successfully`;
};
Library.prototype.borrowBook = function (isbn, user) {
  const book = this.findBook(isbn);
  if (!book) {
    return `Book with ISBN ${isbn} is not in the library`;
  }
  return book.borrow(user);
};
Library.prototype.searchBookTitle = function (title) {
  const books = this.books.filter(
    (book) => normalize(book.title) === normalize(title),
  );
  return books;
};
Library.prototype.findBook = function (isbn) {
  return this.books.find((book) => book.isbn === isbn);
};
Library.prototype.showBooks = function () {
  this.books.forEach((book) => console.log(book));
};
Library.prototype.availableBooks = function () {
  const result = this.books.filter((book) => book.available);
  return result;
};
Library.prototype.borrowedBooks = function () {
  const result = this.books.filter((book) => !book.available);
  return result;
};
Library.prototype.returnBook = function (isbn) {
  const bookToReturn = this.findBook(isbn);

  if (!bookToReturn) {
    return "Book not found";
  }

  return bookToReturn.returnBook();
};
