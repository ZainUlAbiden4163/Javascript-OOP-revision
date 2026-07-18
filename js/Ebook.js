import Book from "./Book";

export default class Ebook extends Book {
  constructor(
    title,
    author,
    isbn,
    fileSize,
    format,
    downloadLink,
    genre = "Programming",
    available = true,
  ) {
    super(title, author, isbn, genre, available);
    this.fileSize = fileSize;
    this.format = format;
    this.downloadLink = downloadLink;
  }
}
Ebook.prototype.download = function () {
  return `Downloading from ${this.downloadLink}`;
};
