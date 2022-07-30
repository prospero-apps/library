/* DOM elements */
// new book
const titleInput = document.querySelector('#book-title');
const authorInput = document.querySelector('#book-author');
const pagesInput = document.querySelector('#book-pages');
const publishedInput = document.querySelector('#book-published');
const languageInput = document.querySelector('#book-language');
const readInput = document.querySelector('#book-read');
const cancelButton = document.querySelector('#cancel-button');
const addButton = document.querySelector('#add-button');

// stats
const bookCount = document.querySelector('#book-count');
const completedCount = document.querySelector('#completed-count');
const pageCount = document.querySelector('#page-count');

// books section
const books = document.querySelector('#books');

// sidebar form
const newBookForm = document.getElementById('add-book');

/* Main stuff */
let library = [];

// book constructor
function Book(title, author, pages, year, language, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.language = language;
    this.read = read;
}

function addBookToLibrary(book) {
    library.push(book);
}

// sample books
let book1 = new Book('The Last Battle', 'Clark Jackson', 326, 2001, 'English', false);
let book2 = new Book('Survivre', 'Mathieu Troubeau', 541, 2018, 'French', true);
let book3 = new Book('Operation Sahara', 'Mary Botte', 310, 1999, 'English', false);
let book4 = new Book('The Sad Story of Pauline', 'Tricia Garcia', 272, 2014, 'English', true);
let book5 = new Book('La rousse dans le bois', 'Pierre Dubois', 452, 2010, 'French', false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);

// add new book
addButton.addEventListener('click', addNewBook);

function addNewBook() {    
    let book = new Book(titleInput.value,
                    authorInput.value,
                    pagesInput.value,
                    publishedInput.value,
                    languageInput.value,
                    readInput.checked);

    addBookToLibrary(book); 
    //books.appendChild(createBook(book));
    updateBooks();

    newBookForm.reset();
}

function createBook(book) {
    let bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    
    let titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.textContent = book.title;

    let bookDetailsDiv = document.createElement('div');
    bookDetailsDiv.className = 'book-details';


    let authorDiv = document.createElement('div');
    authorDiv.className = 'author';
    authorDiv.textContent = book.author;

    let pagesDiv = document.createElement('div');
    pagesDiv.className = 'pages';
    pagesDiv.textContent = book.pages;

    let publishedDiv = document.createElement('div');
    publishedDiv.className = 'published';
    publishedDiv.textContent = book.year;

    let languageDiv = document.createElement('div');
    languageDiv.className = 'language';
    languageDiv.textContent = book.language;

    bookDetailsDiv.appendChild(authorDiv);
    bookDetailsDiv.appendChild(pagesDiv);
    bookDetailsDiv.appendChild(publishedDiv);
    bookDetailsDiv.appendChild(languageDiv);

    let handleBookDiv = document.createElement('div');
    handleBookDiv.className = 'handle-book';

    let removeDiv = document.createElement('div');
    removeDiv.className = 'remove';

    let removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove this book';
    removeButton.addEventListener('click', () => {
        let bookIndex = library.indexOf(book);
        library.splice(bookIndex, 1);
        updateBooks();
    })

    removeDiv.appendChild(removeButton);

    let readDiv = document.createElement('div');
    readDiv.className = 'read';

    let readLabel = document.createElement('label');
    readLabel.textContent = 'Mark as read ';

    let readCheckbox = document.createElement('input');
    readCheckbox.type = 'checkbox';
    readCheckbox.className = 'read-checkbox';
    readCheckbox.checked = book.read;

    readLabel.appendChild(readCheckbox);
    readDiv.appendChild(readLabel);

    handleBookDiv.appendChild(removeDiv);
    handleBookDiv.appendChild(readDiv);

    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(bookDetailsDiv);
    bookDiv.appendChild(handleBookDiv);

    return bookDiv;
}

function displayBooks() {
    for(let i = 0; i < library.length; i++) {
        books.appendChild(createBook(library[i]));        
    }
}

function updateBooks() {
    books.replaceChildren();
    displayBooks();
}

displayBooks();
