const form = document.getElementById("book-update-form");

async function updatebook(){
    let book = {
        bookId : document.getElementById("bookId").value,
        bookName : document.getElementById("bookName").value,
        author : document.getElementById("author").value,
        publisher : document.getElementById("publisher").value,
        price : document.getElementById("price").value
    };
    const response = await fetch("/books/book/update?" +  new URLSearchParams({
        id : book.bookId
    }),{
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    if(response.status == 200){
    alert("Successfully updated the book" + response.status);
    }else{
    alert("Status : " + response.status);
    }
};

form.addEventListener('submit',updatebook);