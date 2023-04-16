var cuenta = 0;
var btn_incrementar = document.getElementById("incrementar");
var input_cuenta = document.getElementById("cuenta");

btn_incrementar.addEventListener("click", function(){
  input_cuenta.value = cuenta;
  if (cuenta >= 0 && cuenta <= 10) {
    input_cuenta.style.background = "white";
  } else {
      if (cuenta < 0) {
        input_cuenta.style.background = "red";
      } else 
        input_cuenta.style.background = "orange";
        } 
  cuenta = cuenta + 1;
});

var btn_decrementar = document.getElementById("decrementar");
btn_decrementar.addEventListener("click", function(){
  input_cuenta.value = cuenta - 1;
  cuenta = cuenta - 1;
});