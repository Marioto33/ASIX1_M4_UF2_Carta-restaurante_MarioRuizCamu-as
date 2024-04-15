let selectedCategory = 'todos';

function loadMenu() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // procesar el archivo XML y crear filas de la tabla
      let xmlDoc = this.responseXML;
      let platos = xmlDoc.getElementsByTagName("dish");
      let tableBody = document.getElementById("menu-table-body");
      tableBody.innerHTML = '';
      for (let i = 0; i < platos.length; i++) {
        let plato = platos[i];
        let nombre = plato.getElementsByTagName("name")[0].childNodes[0].nodeValue;
        let descripcion = plato.getElementsByTagName("description")[0].childNodes[0].nodeValue;
        let precio = plato.getElementsByTagName("price")[0].childNodes[0].nodeValue;
        let calorias = plato.getElementsByTagName("calorias")[0].childNodes[0].nodeValue;
        let caracteristicas = plato.getElementsByTagName("caracteristicas")[0].childNodes[0].nodeValue;
        let categoria = plato.getAttribute("comida");
        if (categoria === selectedCategory || selectedCategory === 'todos') {
          let row = `<tr><td>${nombre}</td><td>${descripcion}</td><td>${precio}</td><td>${calorias}</td><td>${caracteristicas}</td><td>${categoria}</td></tr>`;
          tableBody.innerHTML += row;
        }
      }
    }
  };
  xhttp.open("GET", "menu.xml", true);
  xhttp.send();
}

window.onload = function() {
  loadMenu();
};

let menuSelect = document.getElementById("menu-select");
menuSelect.addEventListener("change", function() {
  selectedCategory = this.value;
  loadMenu();
});