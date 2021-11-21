const form = document.getElementById("book-form");

async function addBook(){
    let book = {
        bookId : document.getElementById("bookId").value,
        bookName : document.getElementById("bookName").value,
        author : document.getElementById("author").value,
        publisher : document.getElementById("publisher").value,
        price : document.getElementById("price").value
    }
    const response = await fetch("/books/book",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    if(response.status == 200){
    alert("Successfully added the book" + response.status);
    }else{
    alert("Status : " + response.status);
    }
};

form.addEventListener('submit',addBook);