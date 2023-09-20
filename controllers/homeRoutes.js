const router = require('express').Router();
const { Book } = require('../models');

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

module.exports = router;