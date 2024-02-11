-- Active: 1705366816117@@localhost@5432@api_examen


create table tbl_tipo_arma
(
    id SERIAL PRIMARY KEY,
    nombre varchar(200),
    creado TIMESTAMP DEFAULT current_timestamp 
);


create table tbl_tipo_disparo
(  id SERIAL PRIMARY KEY,
    tipo varchar(100),
    creado TIMESTAMP DEFAULT current_timestamp 
);

create table tbl_frabricante
(
   id SERIAL PRIMARY KEY,
   fabricante varchar(200),
   creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_calibre
(
    id SERIAL PRIMARY KEY,
    calibre varchar(50),
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_camuflaje
(
    id SERIAL PRIMARY KEY,
    camuflaje varchar(100),
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_accesorios
(
    id SERIAL PRIMARY KEY,
    boca varchar(50),
    canion varchar(50),
    empunadura varchar(50),
    mira varchar(50),
    culata varchar(50),
    creado TIMESTAMP DEFAULT current_timestamp
);


create table tbl_arma
(
    id SERIAL PRIMARY KEY,
    nombre_arma varchar (100),
    id_tipo int REFERENCES tbl_tipo_arma(id),
    id_tipo_disparo int REFERENCES tbl_tipo_disparo(id),
    id_fabricante int REFERENCES tbl_frabricante(id),
    id_calibre int REFERENCES tbl_calibre(id),
    id_camuflaje int REFERENCES tbl_camuflaje(id),
    id_accesorios int REFERENCES tbl_accesorios(id),
    creado TIMESTAMP DEFAULT current_timestamp
)




drop Table tbl_arma

select * from tbl_arma
