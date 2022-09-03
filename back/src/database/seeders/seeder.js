require('../../config/dotenv')();
require('../../config/sequelize');

const seedUser = require('./UserSeeder');
const seedProducto = require('./ProductoSeeder');
const seedStore = require('./StoreSeeder');

(async () => {
  try {
    await seedUser();
    await seedProducto();
    await seedStore();

  } catch(err) { console.log(err) }
})();


