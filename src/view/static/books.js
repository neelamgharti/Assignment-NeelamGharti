async function loadBooks() {
    const response = await fetch('/books');
    const books = await response.json();
    const list = document.querySelector('#books');
    books.forEach(book=>{
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${book.bookId}</td>
      <td>${book.bookName}</td>
      <td>${book.author}</td>
      <td>${book.publisher}</td>
      <td>${book.price}</td>
      `;
      list.appendChild(row);
    });  
  };
  
  
  
  document.addEventListener('DOMContentLoaded',loadBooks());