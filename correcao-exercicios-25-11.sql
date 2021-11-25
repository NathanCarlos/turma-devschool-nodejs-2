create database task_manager;

-- Exercício 1)
create table tasks(
	id serial primary key,
	description varchar(255),
	completed boolean
);

alter table tasks
alter column description type text;

alter table tasks
rename column descricao to description;

drop table tasks;

truncate table tasks restart identity;

-- Exercício 2)
insert into tasks values 
(default, 'Criar um projeto básico', false),
(default, 'Colocar o lixo para fora até as 19h', true),
(default, 'Fazer o jantar até as 22h', true),
(default, 'Reunião de alinhamento dia 18/07 as 14h', true),
(default, 'Reunião de alinhamento projeto bradesco 18/07 as 16h', false),
(default, 'Criar conteúdo da aula', false);

