var productos = new Array();
var cantidades = new Array();
var costos = new Array();
var totalesproducto = new Array();
var tv =0;

function calcular() {
    var costo = document.getElementById('producto').value;
    var producto = document.getElementById('producto').selectedOptions[0].text;
    var cantidad = document.getElementById('cantidad').value;
    var tp = parseFloat(costo) * parseFloat(cantidad);
    var totalxproducto = document.getElementById('totalxproducto');
    totalxproducto.value = tp;
    console.log(tp);
}

function agregar() {
  var ventas = "";
    var costo = document.getElementById('producto').value;
    var producto = document.getElementById('producto').selectedOptions[0].text;
    var cantidad = document.getElementById('cantidad').value;
    var totalxproducto = document.getElementById('totalxproducto').value;
    var totalventa = document.getElementById('totalventa');

    tv+=parseFloat(totalxproducto);
    totalventa.value = tv;

    productos.push(producto);
    cantidades.push(cantidad);
    costos.push(costo);
    totalesproducto.push(totalxproducto);

    var tabla = "<table width='100%'>" +
        "<th>Producto</th>" +
        "<th>Costo</th>" +
        "<th>Cantidad</th>" +
        "<th>Total X Producto</th>";

    for (var i = 0; i < productos.length; i++) {
        ventas += "<tr>" +
            "<td>" + productos[i] + "</td>" +
            "<td>" + cantidades[i] + "</td>" +
            "<td>" + costos[i] + "</td>" +
            "<td>" + totalesproducto[i] + "</td>" +
            "</tr>";
    }

    var carrito = document.getElementById('carrito');
    carrito.innerHTML = tabla + ventas + "</table>";
}

function nueva(){
    productos = new Array();
    cantidades  = new Array();
    costos = new Array();
    totalesproducto = new Array();

    var carrito = document.getElementById('carrito');
    carrito.innerHTML = "";
    var totalventa = document.getElementById('totalventa');
    totalventa.value = 0.0;
    tv =0;
}