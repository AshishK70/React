const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: false,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}
/*
// destructuring
// for all the books
const books = getBooks(1);
// books;

// for single book
const book = getBook(1);
book;

// getting title of a single book
const title1 = book.title;
title1;

// destructuring with object method
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
console.log(author + " wrote " + title, genres);

// destructuring with array method
// const [primaryGenre, secondaryGenre, ...othergenre] = genres;
// console.log(primaryGenre, secondaryGenre, ...othergenre);

// Rest Operator (which is placed at the end like shown below)
const [primaryGenre, secondaryGenre, ...othergenre] = genres;
console.log(primaryGenre, secondaryGenre, ...othergenre);

// Spread Operator in array method to a new genre as shown below
const newGenre = [...genres, 'Flashpoint'];
newGenre;

// Spread Operator in objects method to a new property as shown below
const updatedBook = {
    ...book,
    moviePublicationDate: '2023-08-15',  //adding a new property in this line
    pages: 1024  //updating number of pages in this line by overwriting previous value
}
updatedBook;

// Arrow functions
// function getYear(str) {
//     return str.split('-')[0];   //arrow function here
// };
const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));
// Template literals ( ES6 feature)
const summary = `a book added by template literal  showing ${title} written by ${author} published in ${getYear(publicationDate)} with total ${pages} pages. The book have ${hasMovieAdaptation ? '' : 'no'} movie adaptation`;
summary;

// Ternary Operator ( instead of using if and else ) (three steps/syntax for ternary operator) (example shown below)
// 1--> Condition
// 2--> Statement if Condition is true
// 3--> Statement if Condition is false
const pagesCount = pages > 900 ? "over 900" : 'below 900';
pagesCount;
console.log(`this book have ${pagesCount} pages `);

// Optional Chaining method
function getTotalReviewCount(book) {
    const goodreads = book.reviews?.goodreads?.reviewsCount;  //first ? is used for optional chaining if we are not sure if value exists
    const librarything = book.reviews?.librarything?.reviewsCount;
    return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
*/


// Array methods 
// 1. map
// 2. filter
// 3. reduce

// Map arrow function
// Example 1
// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const books = getBooks();
// books;

// // Example 2  --> getting title of the book
// const titles = books.map((book) => book.title);
// console.log(titles);

// // Example 3 --> getting many data at once from the book
// const essentialData = books.map((book) => ({
//     title: book.title,
//     authorName: book.author
// }));
// console.log(essentialData);

// Asynchronous Javascript: Promises
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data => console.log(data));


// Async/Await function method
async function fetchTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    console.log(data);
    console.log("Await method");
}
console.log("promise method");
fetchTodos();
