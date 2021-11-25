drop table estudantes;
drop table professores;

truncate table estudantes restart identity;

create table estudantes(
	id serial primary key,
	nome varchar(100) not null,
	email varchar(255) not null unique,
	senha varchar(255),
	mensalidade decimal,
	data_criacao date default current_date
);

create table professores(
	id serial primary key,
	nome varchar(100) not null,
	email varchar(255) not null unique,
	senha varchar(15) not null,
	situacao_cadastro boolean default true
);

insert into professores(nome, email, senha) values
('Nathan', 'nathan@gmail.com', '123456');

insert into estudantes(nome, email, senha, mensalidade) values
('Nathan', 'nathan@gmail.com', '123456', 350),
('Nicole', 'nicole@gmail.com', '123456', 200);

insert into estudantes(nome, email, senha, mensalidade) values
('Alan', 'alan@gmail.com', '123456', 350),
('Gabriel', 'gabriel@gmail.com', '123456', 275),
('Palloma', 'palloma@gmail.com', '123456', 400),
('Mariana', 'mariana@gmail.com', '123456', 500);

select * from estudantes;
select nome, email, senha from estudantes;
select nome as name, email, senha as password from estudantes;

-- =, !=, not null, >, <, >=, <=, LIKE, IN Operadores de comparação;
-- Operadores lógicos and(&&), or(||)
select * from estudantes where id = 6;
select * from estudantes where email = 'nathan@gmail.com';
select * from estudantes where mensalidade >= 350 and mensalidade < 500;
select * from estudantes where id in(1, 3, 6, 4);
select * from estudantes where id in(1, 3, 6, 4) or id = 5;
select * from estudantes where email like '%.com';
select * from estudantes where nome like '%a%';

-- CRUD CREATE, READ, UPDATE, DELETE;
-- CREATE, READ, UPDATE, DELETE;

update estudantes set nome = 'Alan Jhonnes', email = 'alanjhonnes@gmail.com'
where id = 1;

delete from estudantes;
delete from estudantes where id = 6;
delete from estudantes where mensalidade < 300;
select * from estudantes;
