// JavaScript to handle client-side pagination and search
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
  const totalBookCards = document.querySelectorAll('.bookblocks:visible').length;
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

// Function to filter and display books based on search query
function filterBooks(query) {
  const bookWrappers = document.querySelectorAll('.bookblocks');
  const searchQuery = query.toLowerCase();
  let displayedCount = 0; // Track the number of displayed book cards

  bookWrappers.forEach((wrapper) => {
    const title = wrapper.querySelector('h3').textContent.toLowerCase();
    const authors = wrapper.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchQuery) || authors.includes(searchQuery)) {
      wrapper.style.display = 'block';
      displayedCount++;
    } else {
      wrapper.style.display = 'none';
    }

    // Hide book cards that exceed the limit of six per page
    if (displayedCount > booksPerPage) {
      wrapper.style.display = 'none';
    }
  });

  // Reset pagination to the first page after filtering
  currentPage = 1;
  updatePaginationControls();
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

// Event handler for search button click
document.getElementById('search-button').addEventListener('click', () => {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim().toLowerCase();
  filterBooks(query);
});

// Event handler for search input changes
document.getElementById('search-input').addEventListener('input', () => {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim().toLowerCase();
  filterBooks(query);
});

// Initial display on page load
updateDisplayedBooks();