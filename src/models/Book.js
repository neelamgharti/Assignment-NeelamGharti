//Basic model for book

let Book =function(id, name,author,publisher,price){
    this.bookId = id,
    this.bookName = name,
    this.author = author,
    this.publisher = publisher,
    this.price = price
};

module.exports = Book;