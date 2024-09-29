fetch('data/taller.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tituloPagina = document.getElementById('titulo_pagina');
        tituloPagina.innerHTML = data.titulo_pagina;

        const datos = document.getElementById('datos');
        datos.innerHTML = `
            <div class="card p-3">
                <h4>Tienda de Computadores</h4>
                <p><strong>Nombre:</strong> ${data.datos_tienda.nombre}</p>
                <p><strong>Correo:</strong> ${data.datos_tienda.correo}</p>
                <p><strong>Teléfono:</strong> ${data.datos_tienda.telefono}</p>
                <p><strong>Dirección:</strong> ${data.datos_tienda.direccion}</p>
            </div>
        `;

        const computadores = data.computadores;
        let computadoresHTML = '';
        for (let i = 0; i < computadores.length; i++) {
            computadoresHTML += `
            <tr>
                <td><img src="${computadores[i].imagen}" alt="${computadores[i].nombre}" class="img-thumbnail"></td>
                <td>${computadores[i].nombre}</td>
                <td>${computadores[i].descripcion}</td>
                <td>$${computadores[i].precio}</td>
            </tr>`;
        }
        const tablacomputadores = document.getElementById('tabla_computadores');
        tablacomputadores.innerHTML = computadoresHTML;
        
    });