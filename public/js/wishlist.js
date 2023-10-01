// fix add to wishlist function 
document.addEventListener("DOMContentLoaded", () => {
  const addToWishlistButton = document.getElementById("add-to-wishlist");
  const chooseBookSelect = document.getElementById("choose-book");
  const selectedBookIdInput = document.getElementById("selected-book-id");

  addToWishlistButton.addEventListener("click", async () => {
    const selectedBookId = chooseBookSelect.value;
    if (!selectedBookId) {
      alert("Please select a book before adding it to your wishlist.");
      return;
    }

    try {
      // Send a POST request to your server to add the book to the user's wishlist
      const response = await fetch(`/api/books/wishlist/${selectedBookId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Book added successfully, reload the page to display the updated wishlist
        location.reload(); // This reloads the current page
      } else {
        // Handle any errors that occur during the request
        alert("Failed to add the book to your wishlist.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the book to your wishlist.");
    }
  });
});


const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/wishlist');
      } else {
        alert('Failed to delete book');
      }
    }
  };
  
  // document
  //   .querySelector('.add-book-form')
  //   .addEventListener('submit', addFormHandler);
  
  document
    .querySelector('.wish-list')
    .addEventListener('click', delButtonHandler);
  