"use strict";
// ---------------- Book Class ----------------
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }
    issueBook() {
        if (this.isIssued) {
            console.log(`Book already issued: ${this.title}`);
        } else {
            this.isIssued = true;
            console.log(`Book issued: ${this.title}`);
        }
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`Book was not issued: ${this.title}`);
        } else {
            this.isIssued = false;
            console.log(`Book returned: ${this.title}`);
        }
    }
}
// ---------------- Book List ----------------
const library = [
    new Book("Atomic Habits", "James Clear", "101"),
    new Book("Ikigai", "Hector Garcia", "102", true),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "103"),
    new Book("Clean Code", "Robert C. Martin", "104")
];
// Display all available books
console.log(" Available Books:");
library
    .filter(book => !book.isIssued)
    .forEach(book => console.log(`${book.title} (ISBN: ${book.isbn})`));
// Issue a book by ISBN
function issueByISBN(isbn) {
    const book = library.find(b => b.isbn === isbn);
    if (!book) {
        console.log(" Book not found!");
        return;
    }
    book.issueBook();
}
issueByISBN("103");