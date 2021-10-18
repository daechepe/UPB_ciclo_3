CREATE DATABASE upb_sprint4;
use upb_sprint4;
CREATE TABLE usuarios(
id integer NOT NULL AUTO_INCREMENT,
usuario VARCHAR(256) NOT NULL,
contrasena VARCHAR(256) NOT NULL,
PRIMARY KEY(id)
)
