select e.nome as Estado,
 c.nome as Cidade,
  regiao 
  from estados e, cidades c
where e.id =c.estado_id

select e.nome as Estado,
 c.nome as Cidade,
  regiao 
  from estados e
  inner join  cidades c on c.estado_id = e.id
