# Nossas Lojas 

Programa que guarda informações de lojas físicas de um e-commerce. Guarda informações como id das lojas, nome, endereço, telefone/celular, CNPJ, horário de trabalho, cidade onde se localiza e estado. 


# Ferramentas Utilizadas

 Foi usado o Node.js como principal compilador, e as principais biblotecas utilizadas foram express, body-parse, consign, nodemon, express-validator..., que podem ser baixadas atrasvés do comando npm install no terminal da pasta. 
 Desenvolvido no windows 7, mas quando executado apartir do docker é executado em linux. E como banco de dados foi usado o MySQL para armazenamento dos dados.
 
 
 # Como baixar e executar
 Primeiramente você deve ter o node.js e o banco de dados MYSQL.
 
 Após clonar o repositório, você deve abrir a pasta no terminal e executar o comando "npm install" para instalar todos os pacotes usados  na produção da aplicação.
 
 Em seu banco de dados(MySQL) voce deve criar uma database da seguinte forma:
 
 ```
 CREATE DATABASE XXXXXXXXXXXXX;
 USE XXXXXXXXXXXXX;
 ```
 No lugar de ```XXXXXXXXXXXXX``` você deve color o nome da sua database e no campo abaixo você deve colocar o nome escolhido em cima novamente.
 
 
 Após isso você devera criar uma tabela da seguinte forma:
 
 ```
 CREATE TABLE`lojas`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`nome_loja` varchar(100) NOT NULL,
`endereco` text NOT NULL,
`celular` varchar(12) NOT NULL,
`cnpj` varchar(14) NOT NULL,
`horarioDeTrabalho` text NOT NULL,
`cidade` text NOT NULL,
`estado` varchar(2) NOT NULL,
PRIMARY KEY(id)
);
```

 Após a instalação de todos os requisitos acima você deve abrir o arquivo ```connectionFactory.js``` dentro da pasta ```persistencia``` no repositório clonado. Nela voce deve inserir seu usuário e senha dentro da função ```createDBConnection``` como abaixo:
 
 var mysql = require('mysql');
```
function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'INSIRA O SEU USÚARIO AQUI',
        password: 'INSIRA SUA SENHA AQUI',
        database: 'INSIRA O NOME DA SUA DATABASE'
    });
}

module.exports = function () {
    return createDBConnection;
}
```
 
 
 ## Como Utilizar
  Para testar, fazer consultas você deverá utilizar o app ```Postman```.
 Antes de fazer os testes a seguir você deverá executar o seguinte processo:

 -Entrar na pasta do projeto no termina;
 -Botar para rodar a aplicação com o comando ```nodemon index.js```
 
 ### Cria Loja
  
 Para criar uma nova loja e cadastra-la em nosso banco de dados v)
