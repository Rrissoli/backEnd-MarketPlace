DROP TABLE produtos
CREATE TABLE usuarios (
id serial primary key,
  nome_da_loja text NOT NULL,
  email text NOT NULL,
  senha text NOT NULL
  
)
create table produtos (
	id serial primary key,
  	usuario_id integer not null,
  	nome text not null,
  	estoque integer not null,
  	preco text not null,
  	categoria text,
  	descricao text,
  nome_imagem text,
  	imagem text,
  	foreign key (usuario_id) references usuarios (id)
);

create table categoria (
	id serial primary key,
  	nome text not null
);
Insert into categoria (nome) values ('Beleza'), ('eletronico'),('moda'),('casa'),('cozinha')
//codigo de recuperação 
FQ4ASS5KAG
732X5HSASI
UQPWIUFA05
3NBTCV3L7S
E9WDTU6KOE
2VNZLPQ4GS
DPDSDUCQ88
KWOQIZ6YL3
CT6MP23T00
BMEO111JD4