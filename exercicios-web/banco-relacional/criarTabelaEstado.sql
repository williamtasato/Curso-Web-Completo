-- Criando a tabela estado!
Create Table  estados (
    id Int unsigned not null auto_increment,
    nome varchar(45) not null,
    sigla varchar(2) not null,
    regiao ENUM ('Norte', 'Nordeste','Centro-Oeste','Sudeste','Sul') not null,
    populacao decimal (5,2) not null,
    primary key(id),
    unique key (nome),
    unique key (sigla)
);