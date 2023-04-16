var url = new URLSearchParams(window.location.search);
var params = Object.fromEntries(url.entries());
var digimons = params["name"];
/** / */
/** / */
console.log(digimons);
var consumo = fetch("https://digimon-api.vercel.app/api/digimon/name/" + digimons);
var section = document.getElementById("digimons");

consumo.then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  // Aqui se hacen las manipulaciones de datos
  datos = datos.sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });

  var html = "";
  for (var i = 0; datos.length > i; i++) {
    html = html + '<a href="/detalle.html?name=' + datos[i].name + '" class="digi">' +
      '<img src="' + datos[i].img + '" />' +
      '<h2>' + datos[i].name + '</h2>' +
      '<span>' + datos[i].level + '</span>' +
      '</a>';
  }
  // inserta todo el html a mostrarse
  section.innerHTML = html;

});

