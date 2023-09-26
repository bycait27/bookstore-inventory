const router = require('express').Router();
const { Book } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all books, sorted by name
    const bookData = await Book.findAll({
      attributes: { exclude: ['genre', 'average_rating', 'isbn', 'stock', 'user_id'] },
      order: [['title', 'ASC']],
    });

    // Serialize user data so templates can read it
    const books = bookData.map((index) => index.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('homepage', { books });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/wishlist', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
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

// get login and render it to user
router.get('/login', (req, res) => {
  // if the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/wishlist');
    return;
  }

  res.render('login');
});


module.exports = router;