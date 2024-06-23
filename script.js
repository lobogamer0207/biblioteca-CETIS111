//código de audio de fondo:
var audio = document.getElementById("audio");

    function togglePlayPause() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause(); 
      }
    }

function cambiarImagen() {
var play = document.getElementById("play");
if (play.src.endsWith("img/apagado.png")) {
play.src = "img/encendido.png";
} else {
play.src = "img/apagado.png";
}
}

// Función para buscar libros por título
function searchBooks() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const books = document.querySelectorAll('.libro');

  books.forEach(book => {
      const title = book.querySelector('.titulos').innerText.toLowerCase();
      if (title.includes(filter)) {
          book.style.display = '';
      } else {
          book.style.display = 'none';
      }
  });
}
function clearSearchInput(){
  document.getElementById('searchInput').value = ''; //Limpia el valor del campo de busqueda
  const books = document.querySelectorAll('.libro');
  books.forEach(book => {
      book.style.display = ''; // Restaurar la visualización de todos los libros
  });
}

//buscador de libros por primera letra del titulo del libro
function searchBooks2() {
  const input = document.getElementById('searchInput2');
  const filter = input.value.toLowerCase();
  const books = document.querySelectorAll('.libro');

  books.forEach(book => {
      const title = book.querySelector('.titulos').innerText.toLowerCase();
      if (title.startsWith(filter)) {
          book.style.display = '';
      } else {
          book.style.display = 'none';
      }
  });
}

document.getElementById('searchInput2').addEventListener('input', searchBooks2);

// Función para eliminar el último libro añadido a la página y su referencia en localStorage (experimentación)
function removeLastBook() {
  const books = document.querySelectorAll('.libro');
  if (books.length > 0) {
      const lastBook = books[books.length - 1];
      const title = lastBook.querySelector('.titulos').innerText;
      const author = lastBook.querySelector('.autor').innerText.replace('Autor: ', '');

      // Eliminar el último libro de la página
      lastBook.remove();

      // Eliminar el último libro de localStorage
      let bookArray = JSON.parse(localStorage.getItem('books')) || [];
      bookArray = bookArray.filter(book => book.title !== title || book.author !== author);
      localStorage.setItem('books', JSON.stringify(bookArray));

      // Eliminar la referencia del último libro de localStorage
      let referenceArray = JSON.parse(localStorage.getItem('references')) || [];
      referenceArray = referenceArray.filter(reference => reference.title !== title || reference.author !== author);
      localStorage.setItem('references', JSON.stringify(referenceArray));

      console.log(`El libro '${title}' por '${author}' ha sido eliminado.`);
      alert(`El libro '${title}' por '${author}' ha sido eliminado.`);
  } else {
      console.log("No hay libros para eliminar.");
      alert("No hay libros para eliminar.");
  }
}

// Añadir evento al botón para eliminar el último libro
document.getElementById('removeLastBookButton').addEventListener('click', removeLastBook);