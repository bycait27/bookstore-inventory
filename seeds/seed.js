const { User, Book } = require('../models'); // Assuming your models are exported this way
const userData = require('./userData.json'); // JSON file containing user data
const bookData = require('./bookData.json'); // JSON file containing book data
const sequelize = require('../config/connection');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
   await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Book.bulkCreate(bookData);
    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedDatabase();