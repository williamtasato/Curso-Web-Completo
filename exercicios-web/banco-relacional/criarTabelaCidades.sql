CREATE TABLE if not EXISTS cidades (
    id Int unsigned not null auto_increment,
    nome varchar(255) not null,
    estado_id Int unsigned not null,
    area  decimal(10,2),
    PRIMARY KEY(id),
    FOREIGN KEY(estado_id) REFERENCES estados (id)
);

-- CREATE TABLE if not EXISTS teste (
--     id Int unsigned not null auto_increment PRIMARY
-- );

-- drop TABLE if  EXISTS teste;