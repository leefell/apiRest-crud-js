/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("alunos", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down() {},
};

// Criar Migration: npx sequelize migration:create --name=nome-da-migration
// Executar migration: npx sequelize db:migrate
