var nombre = "Claudio Villegas";
var ciudad = "Chiguayante";

var tag_h1 = document.getElementsByTagName("h1");
var elem_h1 = tag_h1[0];
//Con innerHTML, incrustamos contenido al elemento definido
elem_h1.innerHTML = nombre;
var is_showing = false

var btn = document.getElementById("ver");
btn.addEventListener("click", function() {
    var tag_h2 = document.getElementsByTagName("h2");
    var elem_h2 = tag_h2[0];

  if (is_showing) {
    elem_h2.innerHTML = "";
    is_showing = false;
  } else {
    elem_h2.innerHTML = ciudad;
    is_showing = true;
  }
});
