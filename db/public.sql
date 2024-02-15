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


create table tbl_fabricante
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


CREATE TABLE tbl_camuflaje
(
    camuflaje_id SERIAL PRIMARY KEY,
    camuflaje varchar(100),
    creado TIMESTAMP DEFAULT current_timestamp
);



create table tbl_accesorios
(
    accesorio_id  SERIAL PRIMARY KEY,
    boca varchar(50),
    canion varchar(50),
    empunadura varchar(50),
    mira varchar(50),
    culata varchar(50),
    creado TIMESTAMP DEFAULT current_timestamp
);



create table tbl_arma
(
    arma_id SERIAL PRIMARY KEY,
    nombre_arma varchar (100),
    id_tipo int REFERENCES tbl_tipo_arma(id),
    id_tipo_disparo int REFERENCES tbl_tipo_disparo(id),
    id_fabricante int REFERENCES tbl_frabricante(id),
    id_calibre int REFERENCES tbl_calibre(id),  
    creado TIMESTAMP DEFAULT current_timestamp
);


CREATE TABLE tbl_arma_camuflaje
(
    id SERIAL PRIMARY KEY,
    arma_id INT,
    camuflaje_id INT,
    FOREIGN KEY (arma_id) REFERENCES tbl_arma(arma_id) ON DELETE CASCADE,
    FOREIGN KEY (camuflaje_id) REFERENCES tbl_camuflaje(camuflaje_id) ON DELETE CASCADE
);

 

CREATE TABLE tbl_arma_accesorio
(
    id SERIAL PRIMARY KEY,
    arma_id int,
    accesorio_id int,
    FOREIGN KEY (arma_id) REFERENCES tbl_arma(arma_id) ON DELETE CASCADE,
    FOREIGN KEY (accesorio_id) REFERENCES tbl_accesorios(accesorio_id) ON DELETE CASCADE
);


/*
Delete from tbl_tipo_arma

drop Table tbl_arma_camuflaje


drop TABLE tbl_arma_accesorio


select * from tbl_arma_camuflaje


select * from tbl_arma_accesorio

Para probar codigo
*/


    SELECT
    a.arma_id,
    a.nombre_arma,
    ta.id AS tipo_arma_id,
    ta.nombre AS tipo_arma,
    td.id AS tipo_disparo_id,
    td.tipo AS tipo_disparo,
    f.id AS fabricante_id,
    f.fabricante,
    c.id AS calibre_id, 
    c.calibre,
    ac.accesorio_id,
    ac.boca,
    ac.canion,
    ac.empunadura,
    ac.mira,
    ac.culata,
    cam.camuflaje_id,
    cam.camuflaje
FROM
    tbl_arma a
    INNER JOIN tbl_tipo_arma ta ON a.id_tipo = ta.id
    INNER JOIN tbl_tipo_disparo td ON a.id_tipo_disparo = td.id
    INNER JOIN tbl_frabricante f ON a.id_fabricante = f.id
    INNER JOIN tbl_calibre c ON a.id_calibre = c.id
    LEFT JOIN tbl_arma_camuflaje acam ON a.arma_id = acam.arma_id
    LEFT JOIN tbl_camuflaje cam ON acam.camuflaje_id = cam.camuflaje_id
    LEFT JOIN tbl_arma_accesorio aa ON a.arma_id = aa.arma_id
    LEFT JOIN tbl_accesorios ac ON aa.accesorio_id = ac.accesorio_id;