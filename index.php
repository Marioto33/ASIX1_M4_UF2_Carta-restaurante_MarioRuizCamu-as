<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>El Gusto ibérico</title>
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="shortcut icon" href="./img/gusto iberico.png" type="image/x-icon">
  </head>
  <body>
    <div class="menu-container">
      <img src="./img/gusto iberico.png" alt="">
      <div class="select-container">
        <label for="menu-select">Seleccione una categoría:</label>
        <select id="menu-select">
          <option value="todos">Todos</option>
          <option value="primeros">Primeros platos</option>
          <option value="segundos">Segundos platos</option>
          <option value="postres">Postres</option>
        </select>
      </div>
      <table id="menu-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Calorias</th>
            <th>caracteristicas</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody id="menu-table-body"></tbody>
      </table>
    </div>
    <script src="menu.js"></script>
  </body>
</html>
