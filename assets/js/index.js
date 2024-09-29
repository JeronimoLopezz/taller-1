fetch('data/taller.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tituloPagina = document.getElementById('titulo_pagina');
        tituloPagina.innerHTML = data.titulo_pagina;

        const datos = document.getElementById('datos');
        datos.innerHTML = `
            <div class="bg-dark text-white text-center py-4">
                <h4>Tienda de Computadores</h4>
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
                <td>${computadores[i].nombre}</td>
                <td>${computadores[i].descripcion}</td>
                <td>$${computadores[i].precio}</td>
            </tr>`;
        }
        const tablacomputadores = document.getElementById('tabla_computadores');
        tablacomputadores.innerHTML = computadoresHTML;
        
    });