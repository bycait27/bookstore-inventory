// JavaScript to handle client-side pagination
const booksPerPage = 6;
let currentPage = 1;

// Function to update the displayed books based on the current page
function updateDisplayedBooks() {
  const bookWrappers = document.querySelectorAll('.bookblocks');
  bookWrappers.forEach((wrapper, index) => {
    if (index >= (currentPage - 1) * booksPerPage && index < currentPage * booksPerPage) {
      wrapper.style.display = 'block';
    } else {
      wrapper.style.display = 'none';
    }
  });
}

// Event handler for "Next Page" button
document.getElementById('next-page').addEventListener('click', () => {
  currentPage++;
  updateDisplayedBooks();
});

// Event handler for "Previous Page" button
document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updateDisplayedBooks();
  }
});

// Initial display on page load
updateDisplayedBooks();