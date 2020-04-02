CREATE TABLE if not EXISTS empresas (
    id Int unsigned not null auto_increment,
    nome varchar(255) not null,
    cnpj int unsigned,
    PRIMARY KEY(id),
    Unique  KEY(cnpj)
);

-- cidades_empresas
CREATE TABLE if not EXISTS empresas_unidades (
empresa_id Int unsigned not null,
cidade_id Int unsigned not null,
sede TINYINT(1) NOT NULL,
PRIMARY KEy (empresa_id, cidade_id)
);