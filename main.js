const chars = {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'};

function encriptador() {

    document.getElementById("encriptadoA").style.display = "none";
    document.getElementById("encriptadoB").style.display = "flex";

    var x = document.getElementById("encriptador");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value;
    }
    text = text.replace(/[aeiou]/g, m => chars[m]);
    document.getElementById("mensajeEncriptado").innerHTML = text;
  }

  function desencriptador() {

    document.getElementById("encriptadoA").style.display = "none";
    document.getElementById("encriptadoB").style.display = "flex";

    var x = document.getElementById("encriptador");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value;
    }
    text = text.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u")
    document.getElementById("mensajeEncriptado").innerHTML = text;
  }

  function copiar(text) {

    document.getElementById("encriptadoB").style.display = "none";
    document.getElementById("encriptadoA").style.display = "flex";
    
    text = document.getElementById("mensajeEncriptado").innerHTML
    if(navigator.clipboard) {
        navigator.clipboard.writeText(text);
    }
    else{
        alert(text);
    }
}