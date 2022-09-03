require('../../config/dotenv')();
require('../../config/sequelize');

<<<<<<< HEAD
// const seedModel = require('./seedEspecie');

(async () => {
  try {
    //await seedModel();

  } catch(err) { console.log(err) }
})();
=======
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


>>>>>>> 187dbfd423994722ea2ac46163efbef2193ce88c
