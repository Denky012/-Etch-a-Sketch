//Ingresar un numero
let filasColumnas;
let cantidadFilas;
let cantidadColumnas;

const boton = document.querySelector("#presionar");
boton.addEventListener("click", () => {
  filasColumnas = prompt("Elija un numero de filas x columnas entre 1x1 a 50x50: ");
  seleccion();
});

function seleccion() {
  let separacion = filasColumnas.split("x");

  //Asignamo la posicion a cada variable, y la transformamos en numeros
  cantidadColumnas = parseInt(separacion[1]);
  cantidadFilas = parseInt(separacion[0]);

  const contenidoSketch = document.querySelector(".contenido-sketch");
  contenidoSketch.innerHTML = ""; // Limpiar el contenido existente

  //Esto es en caso de que el string que transformamos en un numero no sea un numero (su valor como numero es NaN)
  while (
    isNaN(cantidadColumnas) ||
    isNaN(cantidadFilas) ||
    cantidadColumnas >= 51 ||
    cantidadColumnas < 1 ||
    cantidadFilas >= 51 ||
    cantidadFilas < 1
  ) {
    // Si una o ambas entradas no son números, muestra un mensaje de error
    alert("Ingrese un número válido para filas y columnas.");
    filasColumnas = prompt("Elija un numero de filas x columnas entre 1x1 a 50x50: ");
    separacion = filasColumnas.split("x");

    cantidadColumnas = parseInt(separacion[1]);
    cantidadFilas = parseInt(separacion[0]);
  }

  //Este es el array en donde se almacenara todo
  let columnasArray = [];

  //Aqui creamos las columnas
  for (let numeroColumnas = 0; numeroColumnas < cantidadColumnas; numeroColumnas++) {
    let columnas = document.createElement("div");
    columnas.classList.add("columnas");
    contenidoSketch.appendChild(columnas);

    columnasArray.push(columnas);
  }

  //Esto crea la cantidad de filas
  for (let numeroFilas = 0; numeroFilas < cantidadFilas; numeroFilas++) {
    //AQUI SE ITERA SOBRE LAS COLUMNAS, Y SE les INTRODUCE A CADA UNA LA CANTIDAD DE FILAS
    for (let i = 0; i < columnasArray.length; i++) {
      let filas = document.createElement("div");
      filas.classList.add("filas");

      // Agrega el evento mouseover y mouseout a cada fila
      filas.addEventListener("mouseover", () => {
        filas.style.backgroundColor = "red";
      });

      columnasArray[i].appendChild(filas);
    }
  }
}
