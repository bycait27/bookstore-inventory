const router = require('express').Router();
const { Book } = require('../models');
const withAuth = require('../utils/auth');

// Function to retrieve book data
const getBookData = async () => {
  try {
    const bookData = await Book.findAll({
      attributes: { exclude: ['genre', 'average_rating', 'isbn', 'stock', 'user_id'] },
      order: [['title', 'ASC']],
    });

    return bookData.map((book) => book.get({ plain: true }));
  } catch (err) {
    throw err;
  }
};

router.get('/', async (req, res) => {
  try {
    const books = await getBookData();
    res.render('homepage', { books });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Retrieve the necessary data, for example, from your database
    const books = await getBookData(); // Replace with your actual data retrieval logic

    res.render('dashboard', { books, layout: false }); // Pass the 'books' data
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/wishlist', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Book }],
    });

    const user = userData.get({ plain: true });

    res.render('wishlist', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the dashboard
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login', { layout: false }); // Render without layout
});

module.exports = router;