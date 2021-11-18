create database mjv_class_students;

create table estudantes(
	ID serial primary key,
	NOME varchar(100),
	EMAIL varchar(255),
	SENHA varchar(15),
	MENSALIDADE real
);

create table professores(
	ID serial primary key,
	NOME varchar(100),
	EMAIL varchar(255),
	SENHA varchar(15),
	MENSALIDADE real
);

drop table professores;

drop database mjv_class_students;

alter database mjv_class_studends rename to mjv_class_students;
