const myLibrary = [];

const libraryTableBody = document.querySelector("#library");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const buttonNewBook = document.querySelector("#btn-new-book");
const buttonCancel = document.querySelector("#cancel");
const buttonSave = document.querySelector("#save");

buttonNewBook.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

buttonCancel.addEventListener("click", () => {
    dialog.close();
});

buttonSave.addEventListener("click", (event) => {
    event.preventDefault();
    const book = new Book(title.value, author.value, pages.value);
        read.checked ? book.read = "Read" : book.read = "Not Read";
    addBookToLibrary(book);
    const bookAsArray = [book];
    displayBooksInLibrary(bookAsArray);
    dialog.close();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooksInLibrary(books) {
    for (let i = 0; i < books.length; i++) {
        const tableRow = document.createElement("tr");
        const title = document.createElement("td");
        const author = document.createElement("td");
        const pages = document.createElement("td");
        const read = document.createElement("td");

        title.textContent = books[i].title;
        author.textContent = books[i].author;
        pages.textContent = books[i].pages;
        read.textContent = books[i].read;

        libraryTableBody.appendChild(tableRow);
        tableRow.appendChild(title);
        tableRow.appendChild(author);
        tableRow.appendChild(pages);
        tableRow.appendChild(read);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
addBookToLibrary(theHobbit);

const theGreatGatsby = new Book("The Great Gatsby", "Scott Fitzgerald", 395, "not read yet");
addBookToLibrary(theGreatGatsby);

const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1652, "not read yet");
addBookToLibrary(warAndPeace);

const wiseguy = new Book("Wiseguy", "Nicolas Pileggi", 424, "read");
addBookToLibrary(wiseguy);

displayBooksInLibrary(myLibrary);