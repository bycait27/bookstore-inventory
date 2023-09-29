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

  // Update pagination controls
  updatePaginationControls();
}

// Function to update pagination controls
function updatePaginationControls() {
  const nextPageButton = document.getElementById('next-page');
  const prevPageButton = document.getElementById('prev-page');

  // Calculate the total number of pages based on the number of book cards
  const totalBookCards = document.querySelectorAll('.bookblocks').length;
  const totalPages = Math.ceil(totalBookCards / booksPerPage);

  // Disable or enable "Next Page" and "Previous Page" buttons based on currentPage and totalPages
  if (currentPage === 1) {
    prevPageButton.disabled = true;
  } else {
    prevPageButton.disabled = false;
  }

  if (currentPage === totalPages || totalBookCards < booksPerPage) {
    nextPageButton.disabled = true;
  } else {
    nextPageButton.disabled = false;
  }
}

// Event handler for "Next Page" button
document.getElementById('next-page').addEventListener('click', () => {
  if (!document.getElementById('next-page').disabled) {
    currentPage++;
    updateDisplayedBooks();
  }
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