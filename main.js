const favoriteBooks = [
  {
    id: 1,
    title: 'Head First JavaScript Programming',
    author: 'Eric Freeman',
    price: 29.99,
    genre: 'Programming',
  },
  {
    id: 2,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 39.99,
    genre: 'Programming',
  },
  {
    id: 3,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 49.99,
    genre: 'Programming',
  },
  {
    id: 4,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    genre: 'Fantasy',
  },
  {
    id: 5,
    title: 'The Witcher',
    author: 'Andrzej Sapkowski',
    price: 19.99,
    genre: 'Fantasy',
  },
]




const printBook = (book) => {
  for (let i = 0; i < book.length; i++) {
    console.log(book[i].author);
  }
}

const printCheapBook = (book) => {
  for (let i = 0; i < book.length; i++) {
    if (book[i].price < 30) {
      console.log(`Стоимость книги: ${book[i].price}`)
    }
  }
}

printCheapBook(favoriteBooks);

function processBook(book, doSTWEB) {
    for (let i = 0; i < book.length; i++) {
    doSTWEB(book[i]);
  };
};

const logAutor = (book) => console.log(book.author);

processBook(favoriteBooks, logAutor)
