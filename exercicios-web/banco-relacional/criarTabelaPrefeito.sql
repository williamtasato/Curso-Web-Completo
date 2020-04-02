CREATE TABLE if not EXISTS prefeitos (
    id Int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id Int unsigned ,
    PRIMARY KEY(id),
    UNIQUE KEY (cidade_id),
    FOREIGN KEY(cidade_id) REFERENCES cidades (id)
);

