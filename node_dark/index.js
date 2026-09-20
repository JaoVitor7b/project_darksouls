// Index.js arquivo principal do back-end.

//Inportand o Express .js para o projeto
const express = require("express"); //Forma Classica (CommonJS Modules)

const app = express(); //Criando instancia do Express

//Configurando o EJS
app.set("view engine", "ejs"); //Rendeniza as paginas do Site

app.use(express.static("public")); //Puxando pasta publica

//Aqui irão as rotas do Site
//Rota principal
//.get() -> Cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/enemies", (req, res) => {
  res.render("enemies");
});

app.get("/history", (req, res) => {
  res.render("history");
});

app.get("/levels", (req, res) => {
  res.render("levels");
});

//Metodo do Express para iniciar um servidor back-end

//app.listen()

//Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  //Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    //Caso haja sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});