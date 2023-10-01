const router = require('express').Router();
const { Book } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const bookData = await Book.findAll({
      });
      res.status(200).json(bookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const bookData = await Book.findByPk(req.params.id, {
      });
  
      if (!bookData) {
        res.status(404).json({ message: 'No book found with that id!' });
        return;
      }
  
      res.status(200).json(bookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/count', (req, res) => {
    db.query('SELECT COUNT(*) AS totalBooks FROM books', (error, results) => {
      if (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'An error occurred' });
      }
  
      const totalBooks = results[0].totalBooks;
      res.json({ totalBooks });
    });
  });

router.post('/', withAuth, async (req, res) => {
  try {
    const newBook = await Book.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add a new route to handle updating the book's user_id (adding it to the user's wishlist)
router.put('/:id', withAuth, async (req, res) => {
  try {
    // Get the user's ID from the session
    const userId = req.session.user_id;

    // Get the book's ID from the request parameters
    const bookId = req.params.id;

    // Find the book by ID
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ message: 'No book found with that ID.' });
    }

    // Add the user_id property to the book
    book.user_id = userId;

    // Save the updated book
    await book.save();

    res.status(200).json({ message: 'Book added to wishlist successfully!' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'An error occurred while adding the book to the wishlist.' });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bookData) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
