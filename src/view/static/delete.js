const form = document.getElementById("delete-form");

async function searchBook(){
    let id = document.getElementById("bookId").value;
    const response = await fetch("/books/book?"+ new URLSearchParams({
        id: id
    }),{
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    });
    if(response.status == 200){
        alert("Successfully deleted the book" + response.status);
    }else{
        alert("Status : " + response.status);
    }    
};

form.addEventListener('submit',searchBook);