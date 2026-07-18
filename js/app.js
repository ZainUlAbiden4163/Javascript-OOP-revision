import Book from "./Book.js";
import Library from "./Library.js";
import renderBooks, {
  bindAddBook,
  bindRemoveBook,
  bindBorrowBook,
} from "./ui.js";

const book1 = new Book(
  "The Alchemist",
  "Paulo Coelho",
  9780061122415,
  "Chemistry",
);
const book2 = new Book(
  "The Pilgrimage",
  "Paulo Coelho",
  9780061687457,
  "Fiction",
);
const book3 = new Book("Fallen", "Lauren Kate", 9780385376112, "Story Telling");
const book4 = new Book(
  "Bridge of Sighs",
  "Richard Russo",
  9781400030903,
  "Learning",
);
const book5 = new Book(
  "The Kite Runner",
  "Khaled Hosseini",
  9781594631931,
  "Fiction",
);

const library = new Library("Central Library", [
  book1,
  book2,
  book3,
  book4,
  book5,
]);

renderBooks(library.books);

bindAddBook(onAddBook);
bindRemoveBook(onRemoveBook);
bindBorrowBook(onBorrowBook);

function onAddBook(title, author, isbn, genre) {
  const newBook = new Book(title, author, isbn, genre);
  library.addBook(newBook);
  renderBooks(library.books);
}
function onRemoveBook(isbn) {
  library.removeBook(isbn);
  renderBooks(library.books);
}
function onBorrowBook(isbn, user) {
  library.borrowBook(isbn, user);
  renderBooks(library.books);
}
