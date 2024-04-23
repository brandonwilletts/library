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
    addBookToLibrary(book);
    dialog.close();
});

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBookFromLibrary(book) {
    myLibrary.splice(book.indexOf(), 1);
    //const rowToRemove = document.querySelector(`tr[index='${index}']`);
    //rowToRemove.remove();
}

// function displayBooksInLibrary(books) {
//     for (let i = 0; i < books.length; i++) {
//         const tableRow = document.createElement("tr");
//         const title = document.createElement("td");
//         const author = document.createElement("td");
//         const pages = document.createElement("td");
//         const read = document.createElement("td");

//         const action = document.createElement("td");
//         const buttonDiv = document.createElement("div");
//             buttonDiv.style.cssText = "display: flex; gap: 8px; flex-wrap: wrap;";
//         const removeButton = document.createElement("button");
//             removeButton.classList = "btn-red btn-sm btn-remove";
//             removeButton.textContent = "Remove";
//         const toggleReadButton = document.createElement("button");
//             if ( books[i].read === true) {
//                 toggleReadButton.textContent = "Mark as Unread"
//                 toggleReadButton.classList = "btn-yellow btn-sm btn-toggle";
//             } else {
//                 toggleReadButton.textContent = "Mark as Read"
//                 toggleReadButton.classList = "btn-green btn-sm btn-toggle";
//             }

//         title.textContent = books[i].title;
//         author.textContent = books[i].author;
//         pages.textContent = books[i].pages;
//         read.textContent = books[i].read;

//         libraryTable.appendChild(tableRow);
//         tableRow.appendChild(title);
//         tableRow.appendChild(author);
//         tableRow.appendChild(pages);
//         tableRow.appendChild(read);

//         tableRow.appendChild(action);
//         action.appendChild(buttonDiv);
//         buttonDiv.appendChild(removeButton);
//         buttonDiv.appendChild(toggleReadButton);
//     }
//     // const buttonsRemove = document.querySelectorAll(".btn-remove");
//     // buttonsRemove.forEach((button) => {
//     //     button.addEventListener("click", () => {
//     //         removeBookFromLibrary(button.getAttribute("index"));
//     //     })
//     // })
// }

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary(theHobbit);

const theGreatGatsby = new Book("The Great Gatsby", "Scott Fitzgerald", 395, false);
addBookToLibrary(theGreatGatsby);

const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1652, true);
addBookToLibrary(warAndPeace);

const wiseguy = new Book("Wiseguy", "Nicolas Pileggi", 424, false);
addBookToLibrary(wiseguy);

//displayBooksInLibrary(myLibrary);