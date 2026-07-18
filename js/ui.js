"use strict";
let onAddBook;
let onRemoveBook;
let onBorrowBook;
let onReturnBook;
let onSearchBook;
let onFilterBorrowed;
let onFilterAll;
let onFilterAvailable;
// card parednt container
const bookContainer = document.getElementById("books-container");
const addBookFormContainer = document.getElementById("add-book-form");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const isbnInput = document.getElementById("isbn-input");
const genreInput = document.getElementById("genre-input");
const searchContainer = document.getElementById("search-form");
const searchtTitleInput = document.getElementById("search-input");
const filterBorrowedBtn = document.getElementById("filter-borrowed-btn");
const filterAvailableBtn = document.getElementById("filter-available-btn");
const filterEbookBtn = document.getElementById("filter-ebook-btn");
const filterAllBtn = document.getElementById("filter-all-btn");
// render function
export default function renderBooks(books) {
  // removing previous DOM elements which was panted or render back
  bookContainer.innerHTML = "";
  //   looping over the array and creating the paint
  books.forEach((book) => {
    // creating a card div
    const card = document.createElement("div");
    // Adding class to it
    card.classList.add("card");
    // Creating Html
    card.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Author : </strong> ${book.author}</p>
      <p><strong>Genre : </strong> ${book.genre}</p>
      <p><strong>ISBN : </strong> ${book.isbn}</p>
      <p><strong>Status : </strong> ${book.available ? "Avaialble" : "Borrowed"}</p>
      <p><strong>Borrowed : </strong> ${book.borrowedBy ?? "Nobody"}</p>
      <button  class="borrow-btn"  ${!book.available ? "disabled" : ""} >Borrow</button>
      <button class="return-btn" >Return</button>
      <button class="remove-btn">Remove</button>
    `;
    // Appending the created HTML ABOVE in the card parent container
    bookContainer.appendChild(card);
    // REMOVING BOOK
    const removeBtn = card.querySelector(".remove-btn");
    //Event Listener
    removeBtn.addEventListener("click", function () {
      onRemoveBook(book.isbn);
    });
    // BORROWING BOOK
    const borrowBtn = card.querySelector(".borrow-btn");
    //Event Listener
    borrowBtn.addEventListener("click", function () {
      const user = prompt("Please Enter you name");
      if (!user) {
        alert("Retry with Entering your name");
        return;
      }
      onBorrowBook(book.isbn, user);
    });
    //Return book
    const returnBtn = card.querySelector(".return-btn");
    //Event Listener
    returnBtn.addEventListener("click", function () {
      onReturnBook(book.isbn);
    });
  });
}
addBookFormContainer.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const isbn = Number(isbnInput.value);
  const genre = genreInput.value;
  if (!title || !author || !isbn || !genre) {
    alert("Please Fill out the form");
    return;
  }
  onAddBook(title, author, isbn, genre);
  addBookFormContainer.reset();
});
searchContainer.addEventListener("submit", function (e) {
  e.preventDefault();
  // Reading the entered input
  const textInput = searchtTitleInput.value;
  const text = textInput.trim();

  console.log(text);
  // Resetting the input field back to ""
  onSearchBook(text);
  searchContainer.reset();
});
filterBorrowedBtn.addEventListener("click", function () {
  return onFilterBorrowed();
});
filterAllBtn.addEventListener("click", function () {
  return onFilterAll();
});
filterAvailableBtn.addEventListener("click", function () {
  return onFilterAvailable();
});
export function bindAddBook(handler) {
  onAddBook = handler;
}
export function bindRemoveBook(handler) {
  onRemoveBook = handler;
}
export function bindBorrowBook(handler) {
  onBorrowBook = handler;
}
export function bindReturnBook(handler) {
  onReturnBook = handler;
}
export function bindSearchBook(handler) {
  onSearchBook = handler;
}
export function bindFilterBorrowed(handler) {
  onFilterBorrowed = handler;
}
export function bindFilterAll(handler) {
  onFilterAll = handler;
}
export function bindFilterAvailable(handler) {
  onFilterAvailable = handler;
}
