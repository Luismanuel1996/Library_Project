class Book {
  id;
  title;
  author;
  read;

  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}


class Library {
  bookCount;
  books;

  constructor(count, array) {
    this.bookCount = count;
    this.books = array;
  }

  addBook() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const read = document.getElementById("read");
    const tableBodyElement = document.getElementById("tbody");

    const book = new Book(title.value, author.value, read.checked);
    this.books.push(book);

    const TR = document.createElement("tr");
    const tdTitle = document.createElement("td");
    tdTitle.textContent = book.title;
    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = book.author;
    const tdRead = document.createElement("td");


    const hasReadInput = document.createElement("input");
    hasReadInput.type = "checkbox";
    hasReadInput.checked = book.read;
    hasReadInput.disabled = true;    


    TR.append(tdTitle, tdAuthor, tdRead);
    tableBodyElement.appendChild(TR)
    this.bookCount++;

  }

  markRead(checkBox, id) {
    this.books.forEach((book) => {
      if (book.id === id) {
        book.read = true;
        checkBox.checked = true;
        checkBox.disabled = true;
      }
    });
  }
}

const addBookButton = document.getElementById("form123");
const bookLibrary = new Library(1, [ new Book("name of the wind", "Patrick Rothfuss", true)]);

addBookButton.addEventListener("submit", (event) => {
    event.preventDefault();
    bookLibrary.addBook()
})

