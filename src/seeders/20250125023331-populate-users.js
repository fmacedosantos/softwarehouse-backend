'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Lucas',
        password: '$2b$08$JzZzpB89KflF1XYhvty0Xe1m3AewJZkXzG4Qh6I7rvkRM47G2hH2y',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {})
  }
};
