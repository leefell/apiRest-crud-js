const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Diana tadinha da silva",
          email: "diana@example.com",
          password_hash: await bcryptjs.hash("senhaQualquer", 8),
          created_At: new Date(),
          updated_At: new Date(),
        },
        {
          nome: "Diully tadinha da silva",
          email: "diully@example.com",
          password_hash: await bcryptjs.hash("senhaQualquer", 8),
          created_At: new Date(),
          updated_At: new Date(),
        },
        {
          nome: "Eduarda tadinha da silva",
          email: "duda@example.com",
          password_hash: await bcryptjs.hash("senhaQualquer", 8),
          created_At: new Date(),
          updated_At: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};

// Para criar um seeds: npx sequelize:generate --name nomeDaSeed
// Seeds executa com: npx sequelize db:seed:all
