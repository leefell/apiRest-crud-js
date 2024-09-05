# API REST CRUD de Alunos

## Descrição

Esta API foi desenvolvida em JavaScript utilizando o framework Express para realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) de alunos. O projeto inclui funcionalidades de upload de fotos dos alunos e autenticação de usuários via JWT. Em suma o intuito desse projeto é estudar como funciona o Express.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **Express**: Framework para construção da API.
- **Sequelize**: ORM para interagir com o banco de dados MySQL.
- **MySQL**: Banco de dados utilizado.
- **JWT (JSON Web Token)**: Autenticação de usuários.
- **Multer**: Gerenciamento de uploads de arquivos.
- **Helmet**: Segurança das requisições HTTP.
- **Bcrypt**: Hash de senhas.

## Instalação e Configuração

### Pré-requisitos

- Node.js
- Banco de Dados MySQL

### Passos para Instalação

Clone o repositório:

```bash
     git clone https://github.com/leefell/apiRest-crud-js.git
```

Instale as dependências:

```bash
    npm i
```

Configure as variáveis de ambiente no arquivo .env:

```env
DATABASE=<nome_do_banco>

DATABASE_HOST=<host_do_banco>
DATABASE_PORT=<porta_do_banco>
DATABASE_USERNAME=<usuario_do_banco>
DATABASE_PASSWORD=<senha_do_banco>

TOKEN_SECRET=<chave_secreta_jwt>
TOKEN_EXPIRATION=<tempo_expiracao_token>

APP_URL=<url_da_api>
APP_LOCAL_URL=<url_local_da_api>
APP_PORT=<porta_da_api>
```

Execute as migrations para configurar o banco de dados:

```bash
npx sequelize-cli db:migrate
```

Inicie o servidor em ambiente de desenvolvimento:

```bash
npm run dev
```

### Endpoints

### Autenticação

POST /token: Gera um token de autenticação (login).

### Alunos

- GET /alunos: Lista todos os alunos.
- POST /alunos: Cria um novo aluno.
- GET /alunos/:id: Exibe os detalhes de um aluno específico.
- PUT /alunos/:id: Atualiza as informações de um aluno.
- DELETE /alunos/:id: Remove um aluno.

### Upload de Fotos

- POST /fotos: Faz o upload de uma foto para um aluno.

### Usuários

- POST /users: Cria um novo usuário (para autenticação).
- PUT /users: Atualiza as informações de um usuário.
- DELETE /users: Remove um usuário.

### Estrutura do Projeto

```arduino
src
│
├── config
│ ├── appConfig.js
│ ├── database.js
│ └── multer.js
│
├── controllers
│ ├── alunoController.js
│ ├── fotoController.js
│ ├── homeController.js
│ ├── tokenController.js
│ └── userController.js
│
├── database
│ ├── migrations
│ ├── seeds
│ └── index.js
│
├── middlewares
│ └── loginRequired.js
│
├── models
│ ├── aluno.js
│ ├── foto.js
│ └── user.js
│
├── routes
│ ├── aluno.js
│ ├── foto.js
│ ├── home.js
│ ├── token.js
│ └── user.js
│
├── app.js
└── server.js
```

### Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch com a sua feature:

   ```bash
   git checkout -b minha-feature-daora
   ```

3. Faça commit das suas alterações:

   ```bash
   git commit -m 'Minha nova feature daora'
   ```

4. Faça o push para a sua branch:

   ```bash
   git push origin minha-feature-daora
   ```

5. Abra um Pull Request.
