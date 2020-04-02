SELECT * FROM prefeitos p;
SELECT * FROM cidades c;

SELECT * FROM cidades c
  INNER JOIN prefeitos p ON p.cidade_id= c.id;

SELECT * FROM cidades c
  left JOIN prefeitos p ON p.cidade_id = c.id;

SELECT * FROM cidades c
 right JOIN prefeitos p ON p.cidade_id = c.id;

-- SELECT * FROM cidades c
--  full JOIN prefeitos p ON p.cidade_id = c.id;


SELECT * FROM cidades c
  left JOIN prefeitos p ON p.cidade_id = c.id
union
SELECT * FROM cidades c
 right JOIN prefeitos p ON p.cidade_id = c.id;