function temperatura() {
  let ingreso;

  while (true) {
    ingreso = parseFloat(prompt("Hola!, ingresa una temperatura en grados Celsius para convertirla"));

    if (isNaN(ingreso)) {
      alert("Ups,Lo que ingresaste no es un número válido, inténtalo nuevamente :)");
    } else {
      
      const convertidof = document.getElementById("farenhei");
      let resultadof = (ingreso * 9/5) + 32;
      convertidof.innerText = `${ingreso}°C a Fahrenheit son: ${resultadof}°F`;

      const convertidok = document.getElementById("kelvin");
      let resultadok = ingreso + 273.15;
      convertidok.innerText = `${ingreso}°C a Kelvin son: ${resultadok}°K`;
      break;
    }
  }
}

temperatura();