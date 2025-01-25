'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Felipe',
        password: '$2a$10$f7FDTdyTWyfN/wP1sMnsE.A82UUkqMohul7Jy.yQTi1nOGpRII3Km',
        role: ['admin', 'manager'], 
        biography: 'Técnico em desenvolvimento de sistemas.',
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/felipe-macedo-dos-santos-37264a1b5/',
          github: 'https://github.com/fmacedosantos?tab=repositories'
        }),
        profile_picture: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {})
  }
};
