UPDATE estados
set nome ='Maranhão'
where sigla ='MA'

select nome,
sigla
 from estados 
 where sigla ='MA'

UPDATE estados
set nome ='Paraná', 
populacao= 11.32
where sigla ='PR'

select 
nome,
sigla,
populacao 
from estados 
where sigla ='PR'