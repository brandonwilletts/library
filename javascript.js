const myLibrary = [];

const libraryTable = document.querySelector("#library");
const dialog = document.querySelector("dialog");
const buttonNewBook = document.querySelector("#btn-new-book");
const buttonCancel = document.querySelector("#cancel");
const form = document.querySelector("form");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

buttonNewBook.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

buttonCancel.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const book = new Book(title.value, author.value, pages.value);
        read.checked ? book.read = "Read" : book.read = "Not Read";
    addBookToMyLibrary(book);
    dialog.close();
});

function addBookToMyLibrary(book) {
    myLibrary.push(book);
    displayBookInTable(book);
}

function removeBookFromMyLibrary(book) {
    myLibrary.splice(book.indexOf(), 1);
    removeBookFromTable(book);
}

function displayBookInTable(book) {
    const tableRow = document.createElement("tr");
    const title = document.createElement("td");
        title.textContent = book.title;
    const author = document.createElement("td");
        author.textContent = book.author;
    const pages = document.createElement("td");
        pages.textContent = book.pages;
    const read = document.createElement("td");
        read.textContent = book.read;
    const action = document.createElement("td");
    const buttonDiv = document.createElement("div");
        buttonDiv.style.cssText = "display: flex; gap: 8px; flex-wrap: wrap;";
    const removeButton = document.createElement("button");
        removeButton.classList = "btn-red btn-sm btn-remove";
        removeButton.textContent = "Remove";
    const toggleReadButton = document.createElement("button");
        if ( book.read === true) {
            toggleReadButton.textContent = "Mark as Unread"
            toggleReadButton.classList = "btn-yellow btn-sm btn-toggle";
        } else {
            toggleReadButton.textContent = "Mark as Read"
            toggleReadButton.classList = "btn-green btn-sm btn-toggle";
        }
        
    libraryTable.appendChild(tableRow);
        tableRow.appendChild(title);
        tableRow.appendChild(author);
        tableRow.appendChild(pages);
        tableRow.appendChild(read);
        tableRow.appendChild(action);
            action.appendChild(buttonDiv);
                buttonDiv.appendChild(removeButton);
                buttonDiv.appendChild(toggleReadButton);
}

function removeBookFromTable(book) {
    const rowToRemove = document.querySelector(`tr[index='${book.indexOf()}']`);
    rowToRemove.remove();
}

//     const buttonsRemove = document.querySelectorAll(".btn-remove");
//     buttonsRemove.forEach((button) => {
//     button.addEventListener("click", () => {
//     removeBookFromMyLibrary(button.getAttribute("index"));
//     })
//     })

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToMyLibrary(theHobbit);

const theGreatGatsby = new Book("The Great Gatsby", "Scott Fitzgerald", 395, false);
addBookToMyLibrary(theGreatGatsby);

const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1652, true);
addBookToMyLibrary(warAndPeace);

const wiseguy = new Book("Wiseguy", "Nicolas Pileggi", 424, false);
addBookToMyLibrary(wiseguy);

//displayBooksInLibrary(myLibrary);