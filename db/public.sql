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
    arma_id INT,
    camuflaje_id INT,
    PRIMARY KEY (arma_id, camuflaje_id),
    FOREIGN KEY (arma_id) REFERENCES tbl_arma(arma_id) ON DELETE CASCADE,
    FOREIGN KEY (camuflaje_id) REFERENCES tbl_camuflaje(camuflaje_id) ON DELETE CASCADE
);



CREATE TABLE tbl_arma_accesorio
(
    arma_id int,
    accesorio_id int,
    PRIMARY KEY (arma_id, accesorio_id),
    FOREIGN KEY (arma_id) REFERENCES tbl_arma(arma_id) ON DELETE CASCADE,
    FOREIGN KEY (accesorio_id) REFERENCES tbl_accesorios(accesorio_id) ON DELETE CASCADE
);

Delete from tbl_tipo_arma

drop Table tbl_arma_camuflaje


drop TABLE tbl_arma_camuflaje


select * from tbl_arma_camuflaje


select * from tbl_arma


Delete from tbl_accesorios





SELECT a.id,
       a.nombre AS nombre_pokemones,
       a.sonido,
       b.nombre AS nombre_tipo,
       d.nombre AS nombre_entrenador
FROM tbl_pokemones a
LEFT JOIN tbl_tipo_pokemon b ON a.id_tipo = b.id
LEFT JOIN tbl_entrenador d ON a.id_nombre = d.id;



SELECT
   arma.arma_id AS arma_id,
   arma.nombre_arma AS nombre_arma,
   arma.creado AS fecha_creacion_arma,
   tipo.nombre AS tipo_arma,
   disparo.tipo AS tipo_disparo,
   fabricante.fabricante,
   calibre.calibre,
   camuflaje.camuflaje,
   accesorios.boca,
   accesorios.canion,
   accesorios.empunadura,
   accesorios.mira,
   accesorios.culata
FROM tbl_arma AS arma
LEFT JOIN tbl_tipo_arma AS tipo ON arma.id_tipo = tipo.id
LEFT JOIN tbl_tipo_disparo AS disparo ON arma.id_tipo_disparo = disparo.id
LEFT JOIN tbl_frabricante AS fabricante ON arma.id_fabricante = fabricante.id
LEFT JOIN tbl_calibre AS calibre ON arma.id_calibre = calibre.id
LEFT JOIN tbl_arma_camuflaje AS arma_camuflaje ON arma.arma_id = arma_camuflaje.arma_id
LEFT JOIN tbl_camuflaje AS camuflaje ON arma_camuflaje.camuflaje_id = camuflaje.camuflaje_id
LEFT JOIN tbl_arma_accesorio AS arma_accesorio ON arma.arma_id = arma_accesorio.arma_id
LEFT JOIN tbl_accesorios AS accesorios ON arma_accesorio.accesorio_id = accesorios.accesorio_id;

select * from tbl_accesorios

insert into tbl_arma 
                 (M416, 1, 1, 
                  1, 1, 1 );



                  "nombre":"M416",
 "id_tipo": 1,
 "id_tipo_disparo": 1,
 "id_fabricante": 1,
 "id_calibre": 1



 SELECT
    arma.arma_id,
    arma.nombre_arma,
    tipo.nombre AS tipo_arma,
    disparo.tipo AS tipo_disparo,
    fabricante.fabricante,
    calibre.calibre,
    accesorios.boca,
    accesorios.canion,
    accesorios.empunadura,
    accesorios.mira,
    accesorios.culata,
    camuflaje.camuflaje
FROM tbl_arma arma
LEFT JOIN tbl_tipo_arma tipo ON arma.id_tipo = tipo.id
LEFT JOIN tbl_tipo_disparo disparo ON arma.id_tipo_disparo = disparo.id
LEFT JOIN tbl_frabricante fabricante ON arma.id_fabricante = fabricante.id
LEFT JOIN tbl_calibre calibre ON arma.id_calibre = calibre.id
LEFT JOIN tbl_arma_accesorio arma_accesorio ON arma.arma_id = arma_accesorio.arma_id
LEFT JOIN tbl_accesorios accesorios ON arma_accesorio.accesorio_id = accesorios.accesorio_id
LEFT JOIN tbl_arma_camuflaje arma_camuflaje ON arma.arma_id = arma_camuflaje.arma_id
LEFT JOIN tbl_camuflaje camuflaje ON arma_camuflaje.camuflaje_id = camuflaje.camuflaje_id;




SELECT
    a.arma_id,
    a.nombre_arma,
    ta.nombre AS tipo_arma,
    td.tipo AS tipo_disparo,
    f.fabricante,
    c.calibre,
    ac.boca,
    ac.canion,
    ac.empunadura,
    ac.mira,
    ac.culata
FROM
    tbl_arma a
    INNER JOIN tbl_tipo_arma ta ON a.id_tipo = ta.id
    INNER JOIN tbl_tipo_disparo td ON a.id_tipo_disparo = td.id
    INNER JOIN tbl_frabricante f ON a.id_fabricante = f.id
    INNER JOIN tbl_calibre c ON a.id_calibre = c.id
    LEFT JOIN tbl_arma_accesorio aa ON a.arma_id = aa.arma_id
    LEFT JOIN tbl_accesorios ac ON aa.accesorio_id = ac.accesorio_id;



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