
const Paciente = document.querySelector("#Paciente")
const Cedula = document.querySelector("#Cedula")
const Telefono = document.querySelector("#Telefono")
const Edad = document.querySelector("#Edad")
const  Patologia = document.querySelector("#Patologia")
const  OD= document.querySelector("#OD")
const OI = document.querySelector("#OI")
const Adicion = document.querySelector("#Adicion")
const  DP = document.querySelector("#DP")
const Altura = document.querySelector("#Altura1")
const Resultados = document.querySelector("#Resultados")
const Montura = document.querySelector("#Montura")
const Cristales = document.querySelector("#Cristales")
// contenedores
const contenedor2 = document.querySelector("#contenedor2")
const botonMenu = document.querySelector("#boton-menu")
const datos1 = document.querySelector("#sugerencias1")
const HomeBtn = document.querySelector("#Home-btn")
const RegistroBtn = document.querySelector("#Registro-btn")
const MensajeBtn = document.querySelector("#mensaje-btn")
const boton = document.querySelector("#boton")
const datos = document.querySelector("#sugerencias")
const configDelete = document.querySelector("#config-delete")
const ProductosBtn = document.querySelector("#producto-btn");

const ConfiguracionBtn = document.querySelector("#config-btn")
const costo = document.querySelector("#Costo")

botonMenu.addEventListener("click" , e => {
 
const menuDesplegable = document.querySelector("#menu-desplegable")
const container2 = document.querySelector("#menu-desplegable")
if ( container2.classList.contains("visible") ===true) {
    container2.classList.remove("visible")
    console.log(menuDesplegable)
}else {  console.log("hdd")
    container2.classList.add("visible")}

})


// Obtener la fecha 
function crearFechaActual() {
    const fecha = new Date(); // Crea una instancia de la fecha actual

    // Obtén los componentes
    const dia = fecha.getDate().toString().padStart(2, '0'); // Día (2 dígitos)
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Mes (0 indexado, +1 para corregir)
    const año = fecha.getFullYear(); // Año completo (ej: 2025)

    // Formatear como "dd/mm/yyyy"
    return `${dia}/${mes}/${año}`;
}

const ul = document.querySelector('ul');
const form = document.querySelector('#form');

// Obtener la fecha 
function crearFechaActual() {
    const fecha = new Date(); // Crea una instancia de la fecha actual

    // Obtén los componentes
    const dia = fecha.getDate().toString().padStart(2, '0'); // Día (2 dígitos)
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Mes (0 indexado, +1 para corregir)
    const año = fecha.getFullYear(); // Año completo (ej: 2025)

    // Formatear como "dd/mm/yyyy"
    return `${dia}/${mes}/${año}`;
}

// Contadores de tareas
// Cargar las tareas desde el servidor cuando se inicia la aplicación
(async () => {
    try {
        const { data } = await axios.get('/api/todos');
        data.forEach(todo => {
            const tabla = document.querySelector("#sugerencias");
            const listItem = document.createElement('div');
            listItem.id = todo.id;
            
            listItem.innerHTML += `

            
              <div id="p-datos">

            <input class="input-datos" value="${todo.paciente || 'Sin nombre'}" readonly></input>
            <input class="input-datos" value="${todo.cedula || 0}" readonly></input>
            <input class="input-datos" value="${todo.fecha || 0}" readonly></input>

                   

        
      
            
            <button id="config-delete">
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                    src="https://cdn.lordicon.com/zxvuvcnc.json"
                    trigger="hover"
                    style="width:30px;height:30px">
                </lord-icon>
            </button>
            
            <button id="config">
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                    src="https://cdn.lordicon.com/lomfljuq.json"
                    trigger="hover"
                    style="width:30px;height:30px">
                </lord-icon>
            </button>

                  <div id="config-container">
            <button id="info"><script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/fikcyfpp.json"
    trigger="hover"
    style="width:30px;height:30px">
</lord-icon>
</button>
</div>
        </div>
    
            `;

         

            tabla.appendChild(listItem);

           
        });
    } catch (error) {
        console.error('Error al cargar tareas:', error);
        window.location.pathname = '/login';
    }
})();












console.log(Paciente.value,Cedula.value,Telefono.value,Edad.value ,Patologia.value, OD.value ,OI.value ,Adicion , DP ,Altura)
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validar campos vacíos
    const campos = [Paciente, Cedula, Telefono, Edad, Patologia, OD, OI, Adicion, DP, Altura , Montura];
    const vacios = campos.filter((campo) => !campo?.value.trim());
    if (vacios.length > 0) {
        console.error("Hay campos vacíos:", vacios.map((campo) => campo.id || campo.name));
        return; // Detener el envío
    }

    try {
        // Enviar datos al backend
        const { data } = await axios.post('/api/todos', {
            paciente: Paciente.value,
            cedula: Cedula.value,
            telefono: Telefono.value,
            patologia: Patologia.value,
            OD: OD.value,
            OI: OI.value,
            Adicion: Adicion.value,
            DP: DP.value,
            Resultados: Resultados.value,
            Montura: Montura.value,
            Cristales: Cristales.value,
            fecha: crearFechaActual(),
        });
        console.log("Tarea guardada:", data);

        // Agregar tarea al DOM
        const tabl2 = document.querySelector("#sugerencias");
        if (!tabl2) {
            console.error("El contenedor #sugerencias no existe.");
            return;
        }

        const listItem = document.createElement("div");
        listItem.id = data.id;
        listItem.innerHTML = `
             <div id="p-datos">
                            <input class="input-datos"  value="${data.paciente || 'Sin nombre'}" readonly></input>
                            <input class="input-datos" value="${data.cedula || 0}" readonly></input>
                            <input class="input-datos" value="${data.telefono|| 0}" readonly></input>

                            <button id="config-delete">
                                <lord-icon src="https://cdn.lordicon.com/zxvuvcnc.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                            </button>
                            <button id="config">
                                <lord-icon src="https://cdn.lordicon.com/lomfljuq.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                            </button>
                            <div id="config-container">
                                <button id="info">
                                    <lord-icon src="https://cdn.lordicon.com/fikcyfpp.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                                </button>
                            </div>
                        </div>
        `;
        tabl2.appendChild(listItem);

        // Reiniciar formulario
        document.querySelector("#form").reset();

        
    } catch (error) {
        console.error("Error al agregar tarea:", error.response ? error.response.data : error.message);
    }
});

     // eliminar
     const infoBtn = document.querySelector("#info");
const containerMas = document.querySelector(".container-mas");

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", async (e) => {
        if (e.target.closest("#info")) {
           console.log(1)
            const boton = e.target.closest("#info");

            // Obtener los datos del producto
            const { data } = await axios.get("/api/todos");
            const productos = Array.isArray(data) ? data : [data];
console.log(data)
console.log(productos)
            // Identificar el div padre seleccionado
            const padre = boton.parentElement.parentElement.parentElement; // Selecciona el div exacto
         console.log(padre)

            if (!padre.classList.contains("container-mas")) {
console.log(productos)

                // Filtrar el producto que NO corresponde al div seleccionado (para agregar contenido)
                
                console.log(padre.id)
                const productoSeleccionado = productos.find(producto => producto.id=== padre.id);
                console.log(padre.id)
     console.log(productoSeleccionado)
                    console.log(2)
                if (productoSeleccionado) {
                    console.log(productoSeleccionado)
                    console.log(3)
                    padre.classList.add("container-mas"); // Añadir la clase
                    padre.style.width = "100%"; // Para ocupar todo el ancho disponible

                    padre.style.maxHeight = "500rem"; // Ajusta el tamaño máximo según el contenido
                    padre.style.overflow = "visible"; // Asegúrate de que el contenido sea visible
                    padre.style.transition = "max-height 0.5s ease-out"; // Animación suave

                    // Actualizar el contenido del div seleccionado
                    padre.innerHTML = `                        
                        <div id="descripcion">      
                            <p>Nombre:</p>
                            <input class="input-datos"  id="NombreActualizado"value="${productoSeleccionado.paciente|| 'Sin nombre'}" ></input>
                            <p>Cantidad:</p>
                            <input class="input-datos" id="CantidadActualizado" value="${productoSeleccionado.cedula| 0}" ></input>
                            <p>Costo:</p>
                            <input class="input-datos"  id="CostoActualizado" value="${productoSeleccionado.telefono || 0}" ></input>
                            <p>Precio:</p>
                            <input class="input-datos" id="PrecioActualizado" value="${productoSeleccionado.patologia || 0}" ></input>
                                                        <p>OD:</p>
                            <input class="input-datos" id="PrecioActualizado" value="${productoSeleccionado.OD || 0}" ></input>
                                                        <p>OI:</p>
                            <input class="input-datos" id="PrecioActualizado" value="${productoSeleccionado.OI || 0}" ></input>
                                                        <p>Adicion:</p>
                            <input class="input-datos" id="PrecioActualizado" value="${productoSeleccionado.Adicion || 0}" ></input>
                                                                                    <p>DP:</p>
                            <input class="input-datos" id="PrecioActualizado" value="${productoSeleccionado.DP|| 0}" ></input>
                                                                                    <p>Montura:</p>
                            <input class="input-datos" id="PrecioActualizado" value="${productoSeleccionado.Montura|| 0}" ></input>


                                                                                                                                            <p>Cristales:</p>
                            <input class="input-datos" id="PrecioActualizado" value="${productoSeleccionado.Cristales || 0}" ></input>
                            
                                                                                                                                            <p>Resultados:</p>
                            <input class="input-datos" id="PrecioActualizado" value="${productoSeleccionado.Resultados || 0}" ></input>
                            <p>Fecha:</p>
                            <p>${productoSeleccionado.fecha || 'Sin fecha'} </p>
                        </div>

                             <div id="container-boton">
                            <button id="config-delete">
                                <lord-icon src="https://cdn.lordicon.com/zxvuvcnc.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                            </button>
                            <button id="config">
                                <lord-icon src="https://cdn.lordicon.com/lomfljuq.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                            </button>
                            <div id="config-container">
                                <button id="info">
                                    <lord-icon src="https://cdn.lordicon.com/fikcyfpp.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                                </button>
                            </div>
                        </div>
                   `;
                }
            } else {
                // Si ya tiene la clase container-mas, agregar más detalles o editar el contenido y filtarr
                const productoActual = productos.find(producto => producto.id === padre.id);
padre.classList.remove("container-mas")
                if (productoActual) {
                    padre.innerHTML = `
                        <div id="p-datos">
                            <input class="input-datos" value="${productoActual.paciente|| 'Sin nombre'}" readonly></input>
                            <input class="input-datos" value="${productoActual.cedula || 0}" readonly></input>
                            <input class="input-datos" value="${productoActual.fecha || 0}" readonly></input>

                            <button id="config-delete">
                                <lord-icon src="https://cdn.lordicon.com/zxvuvcnc.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                            </button>
                            <button id="config">
                                <lord-icon src="https://cdn.lordicon.com/lomfljuq.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                            </button>
                            <div id="config-container">
                                <button id="info">
                                    <lord-icon src="https://cdn.lordicon.com/fikcyfpp.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                                </button>
                            </div>
                        </div>`;
                }
            }
        }
    });
});
   
        document.addEventListener("DOMContentLoaded", () => {
            document.addEventListener("click", async e => {
                if (e.target && (e.target.id === "config-delete" || e.target.closest('#config-delete'))) {
                    e.preventDefault(); // Evita el comportamiento predeterminado del evento
        
                    try {
                        // Obtén y muestra el padre del botón
                        const boton = e.target.closest('#config-delete');
                        const padre = boton.parentElement.parentElement;


                        console.log(padre.id); // Imprime el ID del div padre

                        await axios.delete(`/api/todos/${padre.id}`);
                      padre.remove();
                    } catch (error) {
                        console.error(error);
                    }
                }
            });
        });


        const buscar = document.querySelector("#buscar");
        const buscarBtn = document.querySelector("#buscar-btn");
        
        buscarBtn.addEventListener("click", async (e) => {
            console.log("El usuario seleccionó el campo de búsqueda");
        
            try {
                // Solicitar datos al backend
                const { data } = await axios.get('/api/todos'); // Ajustar para obtener 'data'
                console.log("Datos obtenidos:", data);
        
                // Filtrar los resultados según el valor de búsqueda
                const valorBusqueda = buscar.value.trim(); // Eliminar espacios en blanco
                const resultados = data.filter(paciente =>
                    paciente.paciente.includes(valorBusqueda)
                );
        
                console.log("Resultados encontrados:", resultados);
        
                // Mostrar los resultados filtrados en el contenedor
                const listaResultados = document.querySelector("#sugerencias");
                listaResultados.innerHTML = ``; // Limpiar resultados anteriores
        
                resultados.forEach(item => {
                    const listItem = document.createElement("div");
                    listItem.id = item.id; // Asegúrate de que 'id' esté presente y sea único
                    listItem.innerHTML += `
                        <div id="p-datos">
                            <input class="input-datos" value="${item.paciente || 'Sin nombre'}" readonly></input>
                            <input class="input-datos" value="${item.cedula || 0}" readonly></input>
                            <input class="input-datos" value="${item.telefono || 0}" readonly></input>

                            <button id="config-delete">
                                <lord-icon src="https://cdn.lordicon.com/zxvuvcnc.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                            </button>
                            <button id="config">
                                <lord-icon src="https://cdn.lordicon.com/lomfljuq.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                            </button>
                            <div id="config-container">
                                <button id="info">
                                    <lord-icon src="https://cdn.lordicon.com/fikcyfpp.json" trigger="hover" style="width:30px;height:30px"></lord-icon>
                                </button>
                            </div>
                        </div>
                    `;
                    listaResultados.appendChild(listItem);
                });
            } catch (error) {
                console.error("Error al obtener datos:", error.message);
            }
        });
        
        
        
        
// Menu despegable 

HomeBtn.addEventListener("click", e => {
    window.location.pathname = "/Casa"

})
RegistroBtn.addEventListener("click", e => {
    window.location.pathname = "/Inventario"

})

ProductosBtn.addEventListener("click", e => {
    window.location.pathname = "/Productos"

})

MensajeBtn.addEventListener("click", e => {
    window.location.pathname = "/Facturacion"
  
  })

ConfiguracionBtn.addEventListener("click", e => {
    window.location.pathname = "/Configuracion"

})

const HistorialBtn = document.querySelector("#Historial-btn")
HistorialBtn.addEventListener("click", e => {
    window.location.pathname = "/Historial"

})
        // validacion de los input que no esten vacios


    

        // detectar si es un movil 
        // 
         function detectarMovil() {
  if (window.innerWidth <= 768) { // Define un ancho típico para móviles
    console.log("Este es un dispositivo móvil");
    // Llama aquí la función exclusiva para móviles
    funcionParaMovil();
  } else {
    
    console.log("No es un dispositivo móvil");
  }
}

function funcionParaMovil() {
  // Código exclusivo para móviles

}

// Ejecuta la detección cuando la página carga
window.onload = detectarMovil;
