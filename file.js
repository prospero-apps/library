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
//let library = [];

// book constructor
class Book {
    constructor(title, author, pages, year, language, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
        this.language = language;
        this.read = read;
    }    
}

class Library {
    constructor(library) {
        this.library = library;
        addButton.addEventListener('click', this.addNewBook.bind(this));
    }

    addBookToLibrary(book) {
        this.library.push(book);
    }

    addNewBook() {    
        let book = new Book(titleInput.value,
                        authorInput.value,
                        pagesInput.value,
                        publishedInput.value,
                        languageInput.value,
                        readInput.checked);
    
        this.addBookToLibrary(book); 
        this.updateBooks();
    
        newBookForm.reset();
    }

    updateBooks() {
        books.replaceChildren();
        this.displayBooks();
        this.updateStats();    
    }

    displayBooks() {
        for(let i = 0; i < this.library.length; i++) {
            books.appendChild(this.createBook(this.library[i]));        
        }
    }

    updateStats() {    
        bookCount.textContent = this.library.length;
        completedCount.textContent = this.library.filter(this.checkRead).length;
        pageCount.textContent = this.library.reduce(this.sumPages, 0);
    }

    checkRead(book) {
        return book.read;
    }

    sumPages(total, book) {
        return total + +book.pages;
    }

    createBook(book) {
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
            let bookIndex = this.library.indexOf(book);
            this.library.splice(bookIndex, 1);
            this.updateBooks();
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
        readCheckbox.addEventListener('click', () => {
            if(readCheckbox.checked) {
                book.read = true;
            } else {
                book.read = false;
            } 
            this.updateBooks();       
        })
    
        readLabel.appendChild(readCheckbox);
        readDiv.appendChild(readLabel);
    
        handleBookDiv.appendChild(removeDiv);
        handleBookDiv.appendChild(readDiv);
    
        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(bookDetailsDiv);
        bookDiv.appendChild(handleBookDiv);
    
        return bookDiv;
    }
}

let library = new Library([]);

// sample books
let book1 = new Book('The Last Battle', 'Clark Jackson', 326, 2001, 'English', false);
let book2 = new Book('Survivre', 'Mathieu Troubeau', 541, 2018, 'French', true);
let book3 = new Book('Operation Sahara', 'Mary Botte', 310, 1999, 'English', false);
let book4 = new Book('The Sad Story of Pauline', 'Tricia Garcia', 272, 2014, 'English', true);
let book5 = new Book('La rousse dans le bois', 'Pierre Dubois', 452, 2010, 'French', false);

library.addBookToLibrary(book1);
library.addBookToLibrary(book2);
library.addBookToLibrary(book3);
library.addBookToLibrary(book4);
library.addBookToLibrary(book5);

library.updateStats();
library.displayBooks();
