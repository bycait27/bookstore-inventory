const addFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#book-name').value.trim();
    const author = document.querySelector('#author-name').value.trim();

    // const books = [
    //   {id: 1, title: 'The Great Gatsby'},
    //   {id: 2, title: 'To Kill a Mockingbird'},
    //   {id: 3, title: '1984'},
    //   {id: 4, title: 'Pride and Prejudice'},
    //   {id: 5, title: 'The Catcher in the Rye'},
    //   {id: 6, title: 'The Hobbit'},
    //   {id: 7, title: 'Moby-Dick'},
    //   {id: 8, title: 'War and Peace'},
    //   {id: 9, title: 'The Lord of the Rings: The Fellowship of the Ring'},
    //   {id: 10, title: 'Harry Potter and the Sorcerer\'s Stone'},
    //   {id: 11, title: 'The Hunger Games'},
    //   {id: 12, title: 'The Da Vinci Code'},
    //   {id: 13, title: 'The Alchemist'},
    //   {id: 14, title: 'Lord of the Flies'},
    //   {id: 15, title: 'The Road'},
    //   {id: 16, title: 'Brave New World'},
    //   {id: 17, title: 'The Shining'},
    //   {id: 18, title: 'The Hitchhiker\'s Guide to the Galaxy'},
    // ]

    if (title.includes(books.title)) {
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
  