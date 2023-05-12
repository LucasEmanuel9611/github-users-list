<center>  <h1>Search devs</h1> </center>

<div > 
  <img src="https://github.com/LucasEmanuel9611/github-users-list/blob/main/public/images/home.png" alt="img home"/>
  <img src="https://github.com/LucasEmanuel9611/github-users-list/blob/main/public/images/perfil.png" alt="img perfil page"/>
  <img src="https://github.com/LucasEmanuel9611/github-users-list/blob/main/public/images/coverage.png" alt="img coverage reports"/>
</div>

## 🧪 Tecnologias Utlizadas

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [react](https://reactjs.org)
- [axios](https://axios-http.com/)
- [vite](https://vitejs.dev/)
- [react-router](https://reactrouter.com/en/main)
- [Typescript](https://www.typescriptlang.org/)
- [dayjs](https://day.js.org/)
- [styled-components](https://styled-components.com/docs)
- [jest](https://jestjs.io/pt-BR/)

### Escolha das libs:

- react - foi a tecnologia requisitada para realização do teste.
- axios - permite fazer requisições, definir urls padrões, tratamento de erros, além do grande suporte na comunidade.
- vite - A própria documentação do React pede para que seja usado algum framework como Next, Remix ou Gatsby caso não seja possível a documentação pede para usar algum bundler personalizado como Vite, o qual traz grande ganho de performance comparado a criação com o antigo create-react-app.
- react-router - A lib mais usada na comunidade para navegação no react.
- typescript - foi escolhido para facilitar a manutenção e entendimento no código, na atualidade o typescript é essencial para um bom ciclo de vida do projeto.
- dayjs - lib para manipulação de datas de fácil uso, amplo suporte e muito leve.
- styled-components - lib que permite grande versatilidade na criação de estilos comparado a libs como material ui e bootstrap, outro motivo para uso em comparação a libs zero-runtime como tawilind é que a aplicação não requer nenhum carregamento de estilos sem javascript.

## 💻 Como executar

Clone o projeto e acesse a pasta do mesmo:

```bash
$ git clone https://github.com/LucasEmanuel9611/github-users-list
$ cd github-users-list
```

Você deverá ter a versão LTS do Node instalada:

```
https://nodejs.org/pt-br/download
```

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalar as dependências
$ yarn install
ou
$ npm install


# Iniciar o projeto
$ yarn start
ou
$ npm start
```

<strong>O app estará disponível no seu browser pelo endereço http://localhost:5173/ ou outro indicado pelo terminal.</strong>

Para buildar a aplicação use o seguinte comando:

```bash
$ yarn build
ou
$ npm run build
```

Para Iniciar o build da aplicação use o seguinte comando:

```bash
$ yarn serve
ou
$ npm run serve
```

<strong>O app estará disponível no seu browser pelo endereço http://localhost:4173/ ou outro indicado pelo terminal.</strong>

Para rodar os tests da aplicação use o seguinte comando:

```bash
$ yarn test
ou
$ npm run test
```

<strong>O relatórios detalhados de coverage estarão no diretório coverage na raiz do projeto e poderão ser vistos através de do arquivo index.html.</strong>

### Estrutura:

A aplicação permite fazer busca do usuário pelo seu usernme do github, ao fazer a busca o usuário é direcionado para página de perfil onde é listado vários dados e repositórios do usuário.
