/* DOM elements */
// book elements
const bookTitles = document.getElementsByClassName('title');
const bookAuthors = document.getElementsByClassName('author');
const bookPages = document.getElementsByClassName('pages');
const bookYears = document.getElementsByClassName('published');
const bookLanguages = document.getElementsByClassName('language');
const removeBookButtons = document.getElementsByClassName('remove');
const readCheckboxes = document.getElementsByClassName('read-checkbox');

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

/* Main stuff */
let library = [];

// book contructor
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

// add new book
addButton.addEventListener('click', addNewBook);

function addNewBook() {
    let book = new Book(titleInput.value,
                    authorInput.value,
                    pagesInput.value,
                    publishedInput.value,
                    languageInput.value,
                    readInput.value);

    addBookToLibrary(book);    
}

// sample books
let book1 = new Book('The Last Battle', 'Clark Jackson', 326, 2001, 'English', false);
let book2 = new Book('Survivre', 'Mathieu Troubeau', 541, 2018, 'French', false);
let book3 = new Book('Operation Sahara', 'Mary Botte', 310, 1999, 'English', false);
let book4 = new Book('The Sad Story of Pauline', 'Tricia Garcia', 272, 2014, 'English', false);
let book5 = new Book('La rousse dans le bois', 'Pierre Dubois', 452, 2010, 'French', false);