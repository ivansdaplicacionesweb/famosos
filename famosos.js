var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
  res.setHeader("Content-Type","text/html;charset=utf-8");
  /* Recogemos los valores que envia el formulario*/
  var nombre = req.body.nombre;
  var mes = Number(req.body.mes);
  var anio = Number(req.body.anio);
  /* Array con los nombres de los famosos" */
  var nombres = ["Messi", "Elsa Pataky", "Chris Hemsworth"];
  var nombreFamoso = nombres[mes];
  /* Calculo edad en años con una resta */
  var edad = 2020 - anio;

  /* Mostrar resultado final */
res.write("<h1>Felicidades "+nombre+"!!</h1>");
res.write("<h2>Naciste el mismo mes que "+nombreFamoso+".</h2>");
res.write("<h2>Este año cumplirás "+edad+" años.</h2>");
res.send();
})

app.listen(3000,function(){
  console.log("Yuju!! Servidor funcionando.")
})
