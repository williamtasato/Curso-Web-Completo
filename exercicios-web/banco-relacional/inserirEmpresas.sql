ALTER TABLE empresas MODIFY cnpj varchar(14);

INSERT into empresas
(nome,cnpj)
VALUES 
('Bradesco', 99097870000190),
('Vale', 88097870000190),
('Cielo', 77097870000190);

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

INSERT into empresas_unidades
(empresa_id,cidade_id, sede)
values (4,1,1),
(4,2,0),
(5,1,0),
(5,2,1);