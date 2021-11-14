module.exports = app => {
    const controlador = require("../controladores/controller.js");
  
    var router = require("express").Router();  
  
  
  // Envia lista de disciplinas e docentes associados
   router.get("/", controlador.findAll);
};