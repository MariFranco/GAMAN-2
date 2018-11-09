   //Crear Iniciales
  var imgs = [];
  var imgbochas = new Image();
  imgbochas.src = "./img/iconobochas.png";
  imgs.push(imgbochas);

  var imgcaballo = new Image();
  imgcaballo.src = "./img/iconocaballo.png";
  imgs.push(imgcaballo);

  var imgconsola = new Image();
  imgconsola.src = "./img/iconoconsola.png";
  imgs.push(imgconsola);

  var imgdedal = new Image();
  imgdedal.src = "./img/iconodedal.png";
  imgs.push(imgdedal);

  var imgflores = new Image();
  imgflores.src = "./img/iconoflores.png";
  imgs.push(imgflores);

  var imggafas3d = new Image();
  imggafas3d.src = "./img/iconogafas3d.png";
  imgs.push(imggafas3d);

  var imghilo = new Image();
  imghilo.src = "./img/iconohilo.png";
  imgs.push(imghilo);

  var imgmaquinadecoser = new Image();
  imgmaquinadecoser.src = "./img/iconomaquinadecoser.png";
  imgs.push(imgmaquinadecoser);

  var imgmedalla = new Image();
  imgmedalla.src = "./img/iconomedalla.png";
  imgs.push(imgmedalla);

  var imgrey = new Image();
  imgrey.src = "./img/iconorey.png";
  imgs.push(imgrey);

  var imgtejer = new Image();
  imgtejer.src = "./img/iconotejer.png";
  imgs.push(imgtejer);

  var imgtorre = new Image();
  imgtorre.src = "./img/iconotorre.png";
  imgs.push(imgtorre);

  var imgvideojuegos = new Image();
  imgvideojuegos.src = "./img/iconovideojuegos.png";
  imgs.push(imgvideojuegos);

  var imgviolin = new Image();
  imgviolin.src = "./img/iconoviolin.png";
  imgs.push(imgviolin);


function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

 
  // Crea las hileras de tabla
  for (var i = 0; i < 4; i++) {
    // Crea las celdas
    var hilera = document.createElement("tr");
 
    for (var j = 0; j < 3; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      //Crea imagen
      var imgCelda = new Image();
      var celda = document.createElement("td");
      imgCelda = imgs[(Math.floor((Math.random() * 13) + 1))];
      celda.appendChild(imgCelda);
      hilera.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}
/**
 * Funcion para cambiar la imagen y link
 */
var cont=0;
var imagenPatron=document.getElementById("imagen");
function rotarImagenes()
{
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    //var index = (Math.floor((Math.random() * 13) + 1));

    // cambiamos la imagen y la url
  imagenPatron=imgs[(Math.floor((Math.random() * 13) + 1))];
    
}

/**
 * Función que se ejecuta una vez cargada la página
 */
onload=function()
{
    // Cargamos una imagen aleatoria
    rotarImagenes();

    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes,3000);
}