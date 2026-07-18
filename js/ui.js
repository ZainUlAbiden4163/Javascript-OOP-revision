"use strict";

let addBookHandler;

// card parednt container
const bookContainer = document.getElementById("books-container");
const addBookFormContainer = document.getElementById("add-book-form");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const isbnInput = document.getElementById("isbn-input");
const genreInput = document.getElementById("genre-input");

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

      <button class="borrow-btn">Borrow</button>
      <button class="return-btn">Return</button>
      <button class="remove-btn">Remove</button>

    `;
    // Appending the created HTML ABOVE in the card parent container

    bookContainer.appendChild(card);
  });
}
function addBook(e) {
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const isbn = Number(isbnInput.value);
  const genre = genreInput.value;
  if (!title || !author || !isbn || !genre) {
    alert("Please Fill out the form");
    return;
  }
  addBookHandler(title, author, isbn, genre);
  addBookFormContainer.reset();
}
addBookFormContainer.addEventListener("submit", addBook);

export function bindAddBook(handler) {
  addBookHandler = handler;
}
