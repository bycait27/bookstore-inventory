const addFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#book-name').value.trim();
    const author = document.querySelector('#author-name').value.trim();

    if (title && author) {
        const response = await fetch(`/api/books`, {
            method: 'POST',
            body: JSON.stringify({ title, author }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/wishlist');
        } else {
            alert('Failed to add book');
        }
    }
};

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
  
  document
    .querySelector('.add-book-form')
    .addEventListener('submit', addFormHandler);
  
  document
    .querySelector('.wish-list')
    .addEventListener('click', delButtonHandler);
  