$("select").on("change",function(){
  /* Determinar la opción que escogió */
  var opcion = $(this).val();

  /* Cambiar la imagen en funcion de la opción */
  switch(opcion){
    case "0": $("img").attr("src","imagenes/messi.jpg");
              break;
    case "1": $("img").attr("src","imagenes/elsa.jpg");
              break;
    case "2": $("img").attr("src","imagenes/chris.jpg");
              break;
    default: $("img").attr("src","imagenes/anonimo.png");
             break;

  }
});
