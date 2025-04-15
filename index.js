function fetchBooks() {
  let books = fetch("https://anapioficeandfire.com/api/books")
 
  books
  .then(res=> res.json())
  .then (data=>{ 
    renderBooks(data)
    return data
    
  })
  return books
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
