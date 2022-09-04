require('../../config/dotenv')();
require('../../config/sequelize');

const seedTask = require('./seedTask');
const seedEspecie = require('./seedEspecie');
const seedRecompensa = require('./seedRecompensa');

  (async () => {
    try {
      await seedTask();
      await seedRecompensa();
      await seedEspecie();

    } catch (err) { console.log(err) }
  })();


