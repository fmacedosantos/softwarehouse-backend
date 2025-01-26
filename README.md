# Softwarehouse

**Softwarehouse** é um sistema que ajuda a gerenciar os funcionários de uma empresa. 

## Funcionalidades

- Criação de usuários com autenticação JWT
- Login de usuários
- Acesso a rotas baseadas em permissões
- Gerenciamento de funcionários

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Express
- Sequelize
- MySQL
- Docker

## Instalação

1. Clone o repositório:
```sh
git clone https://github.com/fmacedosantos/softwarehouse-sequelize-and-automatic-tests.git
cd softwarehouse
```
2. Instale as dependências:
```sh
npm install
```
3. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto com as variáveis contidas em `.env.example`
4. Execute as migrações e seeds:
```sh
npm run create-migrations
npm run create-seeds
```
5. Inicie a aplicação:
```sh
npm start
```

## Uso com Docker

1. Construa a imagem Docker:
```sh
docker compose build 
```
2. Crie o banco e popule:
```sh
docker compose run softwarehouse_migrate
```
3. Inicie o contêiner:
```sh
docker compose up softwarehouse
```

#### Dicas

1. Para deletar as seeds:
```sh
docker compose run softwarehouse_delete_seeds
```
2. Para deletar as migrations:
```sh
docker compose run softwarehouse_delete_migrations
```

## Scripts Disponíveis

- `npm start`: Inicia a aplicação com nodemon
- `npm test`: Executa os testes com Jest
- `npm run config-sequilize`: Inicializa o Sequelize
- `npm run create-migration`: Cria uma nova migração
    - Utilize `--` para separar o nome da migração
- `npm run create-migrations`: Executa todas as migrações
- `npm run delete-migrations`: Desfaz todas as migrações
- `npm run create-seed`: Cria uma nova seed
    - Utilize `--` para separar o nome da seed
- `npm run create-seeds`: Executa todas as seeds
- `npm run delete-seeds`: Desfaz todas as seeds

## Contribuição

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença ISC. 