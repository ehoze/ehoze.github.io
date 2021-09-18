// document.getElementById("sale").innerHTML += '<h3>Wyprzedaż!</h3>';
var allElements = document.getElementsByClassName('sale');
Array.prototype.forEach.call(allElements, function(ele) {
    ele.innerHTML += '<h3 class="absolute" style="top: 10px;">Wyprzedaż!</h3>';
});