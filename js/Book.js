export default class Book {
  constructor(title, author, isbn, genre = "Programming", available = true) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.genre = genre;
    this.available = available;
    this.borrowedBy = null;
  }
}
Book.prototype.borrow = function (user) {
  if (!this.available) {
    return `${this.title} is already Borrowed by ${this.borrowedBy}`;
  }
  this.available = false;
  this.borrowedBy = user;
  return `${this.title} borrowed successfully by ${user}`;
};
Book.prototype.returnBook = function () {
  this.available = true;
  this.borrowedBy = null;
  return "Successfully returned";
};

Book.prototype.printDetails = function () {
  console.log(this.book);
};
Book.prototype.isAvailable = function () {
  return this.available;
};
