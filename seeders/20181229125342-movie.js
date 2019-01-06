'use strict';

const movies = [
  {
    title: 'Deadpool',
    director: 'Tim Miller',
  },
  {
    title: 'Bohemian Rhapsody',
    director: 'Bryan Singer',
  },
  {
    title: 'Guardians of the Galaxy',
    director: 'James Gunn',
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    movies.map(movie => {
      movie.createdAt = new Date();
      movie.updatedAt = new Date();
    })

    await queryInterface.bulkInsert('Movie', movies, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movie', null, {})
  }
};
