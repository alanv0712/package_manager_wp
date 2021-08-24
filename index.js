const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug"; // El otro es "Production"

logger.info("La aplicacion inicio con exito");
logger.warn("Esto es un Warning! Falta libreria X en el sistema");
logger.error("No se encontro la funcion Y");
logger.fatal("No se pudo inicializar la aplicacion");

function sum(x, y){
    return x + y;
}

module.exports = sum;


