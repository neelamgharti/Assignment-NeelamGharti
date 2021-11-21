const form = document.getElementById("search-form");

async function searchBook(){
    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    const response = await fetch("/books/search?"+ new URLSearchParams({
        name: bookName,
        author: author,
    }),{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    });
    if(response.status == 200){
        const resdata = await response.json();
        document.write(JSON.stringify(resdata));
    }else{
        alert("Status : " + response.status);
    }    
};

form.addEventListener('submit',searchBook);