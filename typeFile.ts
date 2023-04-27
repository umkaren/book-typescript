interface Book {
    id: number;
    title: string;
    author: string;
    published: Date;
    available: boolean;
}

let books: Book[] = [
    {id: 1, title: "The Cat in the Hat", author: "Dr. Seuss", published: new Date(1957-3-12), available: true},
    {id: 2, title: "Green Eggs and Ham", author: "Dr. Seuss", published: new Date(1960-8-12), available: false},
    {id: 3, title: "The Lorax", author: "Dr. Seuss", published: new Date(1971-6-23), available: false}]

function addBook(book: Book): void {
    books.push(book);
}

function findBookById(id: number): Book | undefined {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            return books[i];
        }
    }
    return undefined;
}

function updateBook(book: Book): boolean {
   for (let i = 0; i < books.length; i++) {
    if (books[i].id === book.id) {
        books[i] = book;
        return true;
    }
   } 
   return false;
}

function removeBook(id: number): boolean {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books.splice(i, 1);
            return true;
        }
    }
    return false;
}