var wishList = document.getElementById("wishlist");
var logOut = document.getElementById("logout");
var back = document.getElementById("back");

document.addEventListener("DOMContentLoaded", () => {
    const addToWishlistButton = document.getElementById("add-to-wishlist");
  
    addToWishlistButton.addEventListener("click", async () => {
      try {
        // Extract the book's ID from the URL
        const bookId = getBookIdFromUrl(); // Implement this function to parse the URL
  
        // Send a PUT request to your server to update the book's user_id
        const response = await fetch(`/api/books/${bookId}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          // Book added to wishlist successfully, you can handle this as needed
          alert("Book added to your wishlist!");
        } else {
          // Handle any errors that occur during the request
          alert("Failed to add the book to your wishlist.");
          console.error("Error:", error);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while adding the book to your wishlist.");
      }
    });
  
    // Function to extract the book's ID from the URL
    function getBookIdFromUrl() {
      // Get the current URL path
      const urlPath = window.location.pathname;
  
      // Parse the URL path to extract the book ID
      const parts = urlPath.split("/");
      const bookId = parts[parts.length - 1]; // Assuming the book ID is at the end of the path
  
      return bookId;
    }
  });

logOut.addEventListener("click", async function () {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Logout failed');
    }
});

back.addEventListener("click", async function () {
    const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Load dashboard failed');
    }
});