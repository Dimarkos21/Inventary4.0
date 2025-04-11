// valores
const Cliente =document.querySelector("#Cliente")
const Cedula =document.querySelector("#Cedula");
const Productos  =document.querySelector("#Productos");
const ProductoInput = document.querySelector("#Producto");
const  Moneda =document.querySelector("#Moneda");
const Metodo =document.querySelector("#Metodo");
const Precio =document.querySelector("#Precio");
const  precioProducto   = document.querySelector("#Precio-producto");

const ProductoPrecio = document.querySelector("#Precio-producto")
// input valor significativo

const Imagen = document.querySelector("#Imagen")
// demas elementos
const form = document.querySelector("#formulario")
const contenedor2 = document.querySelector("#contenedor2");
const botonMenu = document.querySelector("#boton-menu");
const datos1 = document.querySelector("#datos1");
const HomeBtn = document.querySelector("#Home-btn");
const RegistroBtn = document.querySelector("#Registro-btn");
const MensajeBtn = document.querySelector("#mensaje-btn");
const boton = document.querySelector("#boton");
const datos = document.querySelector("#datos");
const configDelete = document.querySelector("#config-delete");
const ProductosBtn = document.querySelector("#producto-btn");
// Boton de informacion

const ConfiguracionBtn = document.querySelector("#config-btn");

// Obtener la fecha 

function mostrarNotificacion(mensaje) {
    const notificacion = document.getElementById("notificacion");
    notificacion.textContent = mensaje;
    notificacion.classList.remove("oculto");
    notificacion.classList.add("visible");

    // Ocultar automáticamente después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove("visible");
        notificacion.classList.add("oculto");
    }, 3000);
}
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
// cargar las tareas 

(async () => {
    try {
        // Hacer la solicitud al servidor para obtener los productos
        const { data } = await axios.get('/api/facturacion');

        // Iterar sobre los productos recibidos
        data.forEach(todo => {
            const tabla = document.querySelector("#datos");
            const listItem = document.createElement('div');
            
            // Usar el atributo _id si es el campo que envía el servidor
            listItem.id = todo._id ;
           // Verificar el ID asignado
            

            listItem.innerHTML += `
        <div id="p-datos">

            <input class="input-datos" value="${todo.cliente || 'Sin nombre'}" readonly></input>
    
            <input class="input-datos" value="${todo.factura || 0}" readonly></input>
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
        console.error('Error al cargar los productos:', error);
        window.location.pathname = '/login';
    }
})();
       

          // menu desplegable 
         
          botonMenu.addEventListener("click" , e => {
 
            const menuDesplegable = document.querySelector("#menu-desplegable")
            const container2 = document.querySelector("#menu-desplegable")
            if ( container2.classList.contains("visible") ===true) {
                container2.classList.remove("visible")
                console.log(menuDesplegable)
            }else {  console.log("hdd")
                container2.classList.add("visible")}
            
            })
        // Formulario

      // Cargar las tareas desde el servidor cuando se inicia la aplicación
let numeroFactura = 0


const masBtn =document.querySelector("#masBtn")
const infoProductos = document.querySelector("#info-productos-div1")
let productos = []; // Arreglo temporal para almacenar los productos

masBtn.addEventListener("click",  e => {
 

    function agregarProducto(nombre, precio, cantidad) {
        const producto = { nombre, precio, cantidad };
        productos.push(producto); // Agrega el producto al arreglo
        console.log(productos); // Muestra los productos actuales
    }
    
    // Ejemplo de agregar un producto

  
console.log(    agregarProducto(Productos.value, precioProducto.value, 1))

      infoProductos.innerHTML += ` <div id="info-productos"><input class="input-datos" id="info-productos"value=" ${Productos.value} " readonly></input>
      <input class="input-datos" id="info-productos" value=" ${precioProducto.value} " readonly></input> </div>
  `



})
function inputValidation(Propiedad ,Propiedad1, Propiedad2 ,  Propiedad3 ,  Propiedad4 , Propiedad5) {
    return (
        Propiedad.value.trim() !== "" &&
        Propiedad1.value.trim() !== "" &&
        Propiedad2.value.trim() !== "" &&
        Propiedad3.value.trim() !== "" &&
        Propiedad4.value.trim() !== "" &&
        Propiedad5.value.trim() !== ""
    );
}

// Ejemplo de uso



form.addEventListener("submit", async (e) => {
    e.preventDefault();

numeroFactura = 0

    

    try {
console.log(productos)
        if (productos.length > 0) { // Verifica si el arreglo tiene elementos
            productos.forEach((producto) => {
              console.log(producto, "h"); // Si cada elemento tiene una propiedad `value`
            });
      

            const infoProductosDiv1 = document.getElementById("info-productos-div1");
            const infoProductosDivs = infoProductosDiv1.querySelectorAll("#info-productos");
            if (inputValidation(Cliente ,Cedula, Productos ,  precioProducto,  Precio , Moneda )) { 
                
                    
            if (Moneda.value === "Bolivar") {
                try {
                    const bolivarBCV = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
                    const Bcv = await bolivarBCV.json(); // Convertimos la respuesta a JSON
                    console.log(Bcv.promedio); // Mostrar la tasa de cambio obtenida
            
                    const ConversionBolivaresaDolares = (Precio.value / Bcv.promedio).toFixed(2) + "$";
            
                     
             
                    function generarFactura() {
                        const timestamp = Date.now(); // Obtén la marca de tiempo en milisegundos
                        const randomPart = Math.floor(Math.random() * 1000); // Agrega una parte aleatoria (opcional)
                        const factura = `FACT-${timestamp}-${randomPart}` + "I"; // Formato único
                        return factura;
                    }
            
                    const facturaGenerada = generarFactura(); // Genera la factura
            
                    // Enviar la solicitud POST al backend
                    const { data } = await axios.post('/api/facturacion', {
                        cliente: Cliente.value,
                        cedula: Cedula.value,
                        productos: productos, // Enviar el array completo de productos
                        Pprecio: ProductoPrecio.value,
                        moneda: Moneda.value,
                        metodo: Metodo.value,
                        factura: facturaGenerada,
                        conversion: ConversionBolivaresaDolares,
                        tasa: Bcv.promedio,
                        precio: Precio.value,
                        fecha: crearFechaActual()
                    });
            
                    // Mostrar la respuesta directamente
                    console.log("Respuesta del servidor:", data);
            
                    // Actualiza la lista de productos y limpia el formulario
                    setTimeout(() => {
                        const nuevoProducto = data;
                        console.log(nuevoProducto);
            
                        const productoElemento = document.createElement("div");
                        productoElemento.id = nuevoProducto._id;
            
                        productoElemento.innerHTML = `
                            <div id="p-datos">
                                <input class="input-datos" value="${nuevoProducto.cliente || 'Sin nombre'}" readonly></input>
                                <input class="input-datos" value="${nuevoProducto.factura || 'Sin nombre'}" readonly></input>
                                <input class="input-datos" value="${nuevoProducto.fecha || 'Sin nombre'}" readonly></input>
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
            
                        document.querySelector("#datos").appendChild(productoElemento);
                    }, 100);
          
                    form.reset(); // Limpia el formulario
        async  function locura() {
            while (infoProductosDiv1.firstChild) {
                infoProductosDiv1.removeChild(infoProductosDiv1.firstChild); // Elimina cada nodo hijo
              }
       
            productos.length === 0 ;
            console.log(productos)
          }

          locura()
                  
                } catch (error) {
                    console.error("Error al procesar la solicitud:", error);
                }
            }
            

            if ( Moneda.value === "Dolar"){
                const bolivarBCV = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
                const Bcv = await bolivarBCV.json(); // Convertimos la respuesta a JSON
                console.log(Bcv.promedio); // Mostramos los datos
                const ConversionBolivaresaDolares =  (await Bcv.promedio * Precio.value).toFixed(2) +"bs"
                let numeroFactura = 1; // Inicializa la primera factura
        
                function generarFactura() {
                    const timestamp = Date.now(); // Obtén la marca de tiempo en milisegundos
                    const randomPart = Math.floor(Math.random() * 1000); // Agrega una parte aleatoria (opcional)
                    const factura = `FACT-${timestamp}-${randomPart}` + "I"; // Formato único
                    return factura;
                }
                

                console.log(generarFactura())
                const { data } = await axios.post('/api/facturacion', { 
                    cliente: Cliente.value, 
                    cedula: Cedula.value, 
                    productos: productos, 
                    Pprecio: ProductoPrecio.value,
                    moneda: Moneda.value, 
                    metodo: Metodo.value, 
                    factura: generarFactura(),
                    conversion: ConversionBolivaresaDolares,
                    tasa: Bcv.promedio ,
                    precio: Precio.value, 
                   
        
                  
                    fecha: crearFechaActual() 
                });
        
                        // Mostrar la respuesta directamente
            console.log("Respuesta del servidor:", data);
            
        
        
            
            // Actualiza la lista de productos y limpia el formulario
            setTimeout(async () => {
              
              
                // Buscar el producto con el ID guardado
                const nuevoProducto = data
                console.log(nuevoProducto);
                if (true) {
                    
                    const existente = document.getElementById(nuevoProducto._id);
        
                    if (true) {
                        const productoElemento = document.createElement("div");
                        productoElemento.id = nuevoProducto._id;
        
                        productoElemento.innerHTML = `
                            <div id="p-datos">
                                <input class="input-datos" value="${nuevoProducto.cliente || 'Sin nombre'}" readonly></input>
        
                                                       <input class="input-datos" value="${nuevoProducto.factura || 'Sin nombre'}" readonly></input>
                                                              <input class="input-datos" value="${nuevoProducto.fecha || 'Sin nombre'}" readonly></input>
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
        
                        document.querySelector("#datos").appendChild(productoElemento);
                    }
                }
            }, 100);
        
            form.reset();
            } else {
                const { data } = await axios.post('/api/facturacion', { 
                    cliente: Cliente.value, 
                    cedula: Cedula.value, 
                    productos: Productos.value, 
                    Pprecio: ProductoPrecio.value,
                    moneda: Moneda.value, 
                    metodo: Metodo.value, 
                    precio: Precio.value, 
                    fecha: crearFechaActual() 
                });
        
                        // Mostrar la respuesta directamente
            console.log("Respuesta del servidor:", data);
            
        
        
            
            // Actualiza la lista de productos y limpia el formulario
            setTimeout(async () => {
              
              
                // Buscar el producto con el ID guardado
                const nuevoProducto = data
                console.log(nuevoProducto);
                if (true) {
                    
                    const existente = document.getElementById(nuevoProducto._id);
        
                    if (true) {
                        const productoElemento = document.createElement("div");
                        productoElemento.id = nuevoProducto._id;
        
                        productoElemento.innerHTML = `
                            <div id="p-datos">
                                <input class="input-datos" value="${nuevoProducto.cliente || 'Sin nombre'}" readonly></input>
                                <input class="input-datos" value="${nuevoProducto.cedula || 0}" readonly></input>
                                <input class="input-datos" value="${nuevoProducto.productos|| 0}" readonly></input>
                                                            <input class="input-datos" value="${nuevoProducto.Pprecio|| 0}" readonly></input>
                         
                                           <input class="input-datos" value="${nuevoProducto.moneda|| 0}" readonly></input>
                                                      <input class="input-datos" value="${nuevoProducto.metodo|| 0}" readonly></input>
                                <input class="input-datos" value="${nuevoProducto.precio || 0}" readonly></input>
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
        
                        document.querySelector("#datos").appendChild(productoElemento);
                    }
                }
            }, 100);
        
            form.reset();
            } } else {mostrarNotificacion("La factura no puede estar vacia")}

          } else {
            console.log("El arreglo está vacío.");
mostrarNotificacion("La factura no puede estar vacia")


       if (inputValidation(Cliente ,Cedula, Productos ,  precioProducto,  Precio , Moneda )) {    
        

        
        if ( false ) {

            
            } else {
            if ( Moneda.value === "Bolivar"){
                const bolivarBCV = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
                const Bcv = await bolivarBCV.json(); // Convertimos la respuesta a JSON
                console.log(Bcv.promedio); // Mostramos los datos
                const ConversionBolivaresaDolares = (  await Precio.value  /  Bcv.promedio).toFixed(2) +"$"
               
   
                function generarFactura() {
                    const timestamp = Date.now(); // Obtén la marca de tiempo en milisegundos
                    const randomPart = Math.floor(Math.random() * 1000); // Agrega una parte aleatoria (opcional)
                    const factura = `FACT-${timestamp}-${randomPart}` + "I"; // Formato único
                    return factura;
                }
        //function generateQR() {
        // const text = document.getElementById("textInput").value;
        //const image = document.getElementById("imageInput").files[0];
        // const qrCodeContainer = document.getElementById("qrcode");
        
        // Concatenar texto con numeración
        //  const uniqueID = Date.now(); // Ejemplo de numeración única
        //   const qrContent = `${text} | ID: ${uniqueID}`;
        
        // Limpiar QR previo
        // qrCodeContainer.innerHTML = "";
        
        // Generar QR con texto y numeración
        // new QRCode(qrCodeContainer, {
        //      text: qrContent,
        //     width: 128,
        //     height: 128
        //  });
        
        // Mostrar imagen asociada
        //  if (image) {
        //     const imgElement = document.createElement("img");
        //     imgElement.src = URL.createObjectURL(image);
        //     qrCodeContainer.appendChild(imgElement);
        // }
        //}
                const aleatorio = Math.random().toString(36).substr(2, 5).toUpperCase(); // Código aleatorio
                console.log(generarFactura())
                const { data } = await axios.post('/api/facturacion', { 
                    cliente: Cliente.value, 
                    cedula: Cedula.value, 
                    productos: Productos.value, 
                    Pprecio : ProductoPrecio.value,
                    moneda: Moneda.value, 
                    metodo: Metodo.value, 
                    factura: generarFactura(),
                    conversion: ConversionBolivaresaDolares,
                    tasa: Bcv.promedio ,
                
                      
                    precio: Precio.value, 
                   
        
                  
                    fecha: crearFechaActual() 
                });
        
                        // Mostrar la respuesta directamente
            console.log("Respuesta del servidor:", data);
            
        
        
            
            // Actualiza la lista de productos y limpia el formulario
            setTimeout(async () => {
              
              
                // Buscar el producto con el ID guardado
                const nuevoProducto = data
                console.log(nuevoProducto);
                if (true) {
                    
                    const existente = document.getElementById(nuevoProducto._id);
        
                    if (true) {
                        const productoElemento = document.createElement("div");
                        productoElemento.id = nuevoProducto._id;
        
                        productoElemento.innerHTML = `
                            <div id="p-datos">
                                <input class="input-datos" value="${nuevoProducto.cliente || 'Sin nombre'}" readonly></input>
        
                                                       <input class="input-datos" value="${nuevoProducto.factura || 'Sin nombre'}" readonly></input>
                                                              <input class="input-datos" value="${nuevoProducto.fecha || 'Sin nombre'}" readonly></input>
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
        
                        document.querySelector("#datos").appendChild(productoElemento);
                    }
                }
            }, 100);
        
            form.reset();
            }
            if ( Moneda.value === "Dolar"){
                const bolivarBCV = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
                const Bcv = await bolivarBCV.json(); // Convertimos la respuesta a JSON
                console.log(Bcv.promedio); // Mostramos los datos
                const ConversionBolivaresaDolares =  (await Bcv.promedio * Precio.value).toFixed(2) +"bs"

     
                function generarFactura() {
                    const timestamp = Date.now(); // Obtén la marca de tiempo en milisegundos
                    const randomPart = Math.floor(Math.random() * 1000); // Agrega una parte aleatoria (opcional)
                    const factura = `FACT-${timestamp}-${randomPart}` + "I"; // Formato único
                    return factura;
                }
                            
                console.log(generarFactura())
                const { data } = await axios.post('/api/facturacion', { 
                    cliente: Cliente.value, 
                    cedula: Cedula.value, 
                    productos: Productos.value, 
                    Pprecio: ProductoPrecio.value,
                    moneda: Moneda.value, 
                    metodo: Metodo.value, 
                    factura: generarFactura(),
                    conversion: ConversionBolivaresaDolares,
                    tasa: Bcv.promedio ,
                    precio: Precio.value, 
                   
        
                  
                    fecha: crearFechaActual() 
                });
        
                        // Mostrar la respuesta directamente
            console.log("Respuesta del servidor:", data);
            
        
        
            
            // Actualiza la lista de productos y limpia el formulario
            setTimeout(async () => {
              
              
                // Buscar el producto con el ID guardado
                const nuevoProducto = data
                console.log(nuevoProducto);
                if (true) {
                    
                    const existente = document.getElementById(nuevoProducto._id);
        
                    if (true) {
                        const productoElemento = document.createElement("div");
                        productoElemento.id = nuevoProducto._id;
        
                        productoElemento.innerHTML = `
                            <div id="p-datos">
                                <input class="input-datos" value="${nuevoProducto.cliente || 'Sin nombre'}" readonly></input>
        
                                                       <input class="input-datos" value="${nuevoProducto.factura || 'Sin nombre'}" readonly></input>
                                                              <input class="input-datos" value="${nuevoProducto.fecha || 'Sin nombre'}" readonly></input>
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
        
                        document.querySelector("#datos").appendChild(productoElemento);
                    }
                }
            }, 100);
        
            form.reset();
            } else {
                const { data } = await axios.post('/api/facturacion', { 
                    cliente: Cliente.value, 
                    cedula: Cedula.value, 
                    productos: Productos.value, 
                    Pprecio: ProductoPrecio.value,
                    moneda: Moneda.value, 
                    metodo: Metodo.value, 
                    precio: Precio.value, 
                    fecha: crearFechaActual() 
                });
        
                        // Mostrar la respuesta directamente
            console.log("Respuesta del servidor:", data);
            
        
        
            
            // Actualiza la lista de productos y limpia el formulario
            setTimeout(async () => {
              
              
                // Buscar el producto con el ID guardado
                const nuevoProducto = data
                console.log(nuevoProducto);
                if (true) {
                    
                    const existente = document.getElementById(nuevoProducto._id);
        
                    if (true) {
                        const productoElemento = document.createElement("div");
                        productoElemento.id = nuevoProducto._id;
        
                        productoElemento.innerHTML = `
                            <div id="p-datos">
                                <input class="input-datos" value="${nuevoProducto.cliente || 'Sin nombre'}" readonly></input>
                                <input class="input-datos" value="${nuevoProducto.cedula || 0}" readonly></input>
                                <input class="input-datos" value="${nuevoProducto.productos|| 0}" readonly></input>
                                                            <input class="input-datos" value="${nuevoProducto.Pprecio|| 0}" readonly></input>
                         
                                           <input class="input-datos" value="${nuevoProducto.moneda|| 0}" readonly></input>
                                                      <input class="input-datos" value="${nuevoProducto.metodo|| 0}" readonly></input>
                                <input class="input-datos" value="${nuevoProducto.precio || 0}" readonly></input>
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
        
                        document.querySelector("#datos").appendChild(productoElemento);
                    }
                }
            }, 100);
        
            form.reset();
            }
           }}
          }

      
        

    } catch (error) {
        console.error("Error al guardar los productos:", error);
    }
});


const infoBtn = document.querySelector("#info");
const containerMas = document.querySelector(".container-mas");

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", async (e) => {
        if (e.target.closest("#info")) {
            const boton = e.target.closest("#info");
            const { data } = await axios.get("/api/facturacion");
            const productos = Array.isArray(data) ? data : [data];
            const padre = boton.parentElement.parentElement.parentElement;

            if (!padre.classList.contains("container-mas")) {
                const productoSeleccionado = productos.find(producto => producto._id === padre.id);

                if (productoSeleccionado) {
                    padre.classList.add("container-mas");
                    padre.style.maxHeight = "500rem";
                    padre.style.overflow = "visible";
                    padre.style.transition = "max-height 0.5s ease-out";

                    padre.innerHTML = `
                        <div id=""><img src=""></div>
                        <div id="descripcion">      
                            <p>Numero:</p>
                            <input class="input-datos" value="${productoSeleccionado.factura || 0}">
                            <p>Cliente:</p>
                            <input class="input-datos" id="Cliente111"value="${productoSeleccionado.cliente || 'Sin nombre'}">
                            <p>Cedula:</p>
                            <input class="input-datos" id="Cedula111" value="${productoSeleccionado.cedula || 0}">
                            <p>Metodo:</p>
                            <input class="input-datos"id="Metodo111" value="${productoSeleccionado.metodo || 0}">
                            <p>Moneda:</p>
                            <input class="input-datos" id="Moneda111" value="${productoSeleccionado.moneda || 0}">
                            <p>Precio:</p>
                            <input class="input-datos" id="Precio111" value="${productoSeleccionado.precio || 0}">
                            <p>Conversion:</p>
                            <input class="input-datos" id="Conversion111" value="${productoSeleccionado.conversion || 0}">
                            <p>Fecha:</p>
                            <p>${productoSeleccionado.fecha || 'Sin fecha'}</p>
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
                            <div id="container-pdf">  
                                <button id="pdf"><img src="../img/pdf.svg"></button>
                            </div>
                        </div>
                    `;const pdfBoton = document.querySelector("#pdf");
                    pdfBoton.addEventListener("click", async () => {
                        const { jsPDF } = window.jspdf;
                        const doc = new jsPDF();
                    
                        // Agregar logo
                        const logo = 'https://th.bing.com/th/id/OIP.jleFhbOD3BG8h1PeUIGdNAHaE8?rs=1&pid=ImgDetMain';
                        doc.addImage(logo, 'PNG', 10, 10, 40, 30);
                    
                        // Encabezado
                        doc.setFontSize(20);
                        doc.setFont("helvetica", "bold");
                        doc.text("FACTURA DE VENTA", 105, 25, { align: "center" });
                        doc.setDrawColor(0, 0, 0);
                        doc.line(10, 40, 200, 40);
                    
                        // Datos del cliente
                        doc.setFont("helvetica", "bold");
                        doc.setFontSize(12);
                        doc.text("Datos del Cliente:", 10, 50);
                    
                        const clienteDatos = [
                            { label: "Número de Factura", value: productoSeleccionado.factura || "Sin número", y: 55 },
                            { label: "Cliente", value: productoSeleccionado.cliente || "Sin nombre", y: 60 },
                            { label: "Cédula", value: productoSeleccionado.cedula || "N/A", y: 65 },
                            { label: "Método de Pago", value: productoSeleccionado.metodo || "N/A", y: 70 },
                            { label: "Moneda", value: productoSeleccionado.moneda || "N/A", y: 75 },
                            { label: "Precio Total", value: `$${productoSeleccionado.precio || "0.00"}`, y: 80 },
                            { label: "Conversión", value: productoSeleccionado.conversion || "N/A", y: 85 },
                            { label: "Fecha", value: productoSeleccionado.fecha || "Sin fecha", y: 90 }
                        ];
                    
                        clienteDatos.forEach(dato => {
                            doc.setFont("helvetica", "normal");
                            doc.text(`${dato.label}: ${dato.value}`, 10, dato.y);
                        });
                    
                        // Línea debajo de los datos del cliente
                        doc.line(10, 95, 200, 95);
                    
                        // Detalles de la compra
                        doc.setFont("helvetica", "bold");
                        doc.setFontSize(12);
                        doc.text("Detalles de la Compra", 10, 105);
                    
                        doc.setFont("helvetica", "normal");
                        doc.setFontSize(10);
                        doc.text("Cant.", 10, 115);
                        doc.text("Descripción", 40, 115);
                        doc.text("Abono", 120, 115);
                        doc.text("Resta", 150, 115);
                        doc.text("Total", 180, 115);
                    
                        const productosDetalles = productoSeleccionado.productos || [];
                        let yPosition = 125; // Posición inicial en Y para los detalles de productos
                    
                        productosDetalles.forEach(item => {
                            doc.text(String(item.cantidad || "N/A"), 10, yPosition); // Cantidad convertida a texto
                            doc.text(item.nombre || "Producto", 40, yPosition); // Descripción del producto
                            doc.text(`$${(item.abono || 0).toFixed(2)}`, 120, yPosition); // Abono formateado
                            doc.text(`$${(item.resta || 0).toFixed(2)}`, 150, yPosition); // Resta formateada
                            doc.text( "$" + item.precio || "Producto", 180, yPosition); // Descripción del producto

                            yPosition += 10; // Incrementar para la próxima línea
                        });
                    
                        // Observaciones
                        doc.setFont("helvetica", "bold");
                        doc.setFontSize(12);
                        yPosition += 10;
                        doc.text("Observaciones:", 10, yPosition);
                        doc.setFont("helvetica", "normal");
                        doc.setFontSize(10);
                        doc.text(`${productoSeleccionado.observaciones || "Ninguna"}`, 10, yPosition + 5);
                    
                        // Total a pagar y firma
                        yPosition += 20;
                        doc.setFont("helvetica", "bold");
                        doc.text("TOTAL A PAGAR:" , 10, yPosition);
                        doc.setFont("helvetica", "normal");
                    if (productoSeleccionado.moneda === "Bolivar") {
                        doc.text(`${productoSeleccionado.precio || "0.00"}bs`, 50, yPosition);  
                    }
                    if (productoSeleccionado.moneda === "Dolar") {
                        doc.text(`$${productoSeleccionado.precio || "0.00"}`, 50, yPosition);  
                    }
                        doc.text("Firma Cliente:", 10, yPosition + 10);
                        doc.line(50, yPosition + 10, 120, yPosition + 10);
                    
                        // Guardar el PDF
                        doc.save("factura.pdf");
                    });
              
                }
            } else {
                const productoActual = productos.find(producto => producto._id === padre.id);
                padre.classList.remove("container-mas");
                if (productoActual) {
                    padre.innerHTML = `
                        <div id="p-datos">
                            <input class="input-datos" value="${productoActual.cliente || 'Sin nombre'}" readonly></input>
                            <input class="input-datos" value="${productoActual.factura || 0}" readonly></input>

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

            await axios.delete(`/api/facturacion/${padre.id}`);
            console.log(padre.id)
              padre.remove();
            } catch (error) {
                console.log(error);
            }
        }
    });
});

// actualizar productos
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", async (e) => {
        if (e.target.closest("#config"))  {
          console.log(9)

try {
    const   NombreActualizado = document.querySelector("#Cliente111")
    const  CantidadActualizado = document.querySelector("#Cedula111")
    const   CostoActualizado = document.querySelector("#Metodo111")
    const  PrecioActualizado = document.querySelector("#Precio111")
    
       // Obtén y muestra el padre del botón
       const boton = e.target.closest('#config');
       const padre = boton.parentElement.parentElement;


       console.log(padre.id); // Imprime el ID del div padre

   
    
     
      console.log(    `${NombreActualizado.value}`,
         `${CantidadActualizado.value}`,
        `${CostoActualizado.value}`,
  `${PrecioActualizado.value}`,)
       

 
       console.log(NombreActualizado.value)
   await axios.patch(`/api/facturacion/${padre.id}`, { 
 
    
    nombreActualizado: `${NombreActualizado.value}`,
    cantidadActualizado: `${CantidadActualizado.value}`,
    costoActualizado: `${CostoActualizado.value}`,
 precioActualizado: `${PrecioActualizado.value}`,

  
});



} catch (error){console.log(error)}

        }
    });
});




        
if (1 === 4) {const buscar = document.querySelector("#");
    Productos.addEventListener("focus", async (e) => {
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

                  
                    </div>
                `;
                listaResultados.appendChild(listItem);
            });
        } catch (error) {
            console.error("Error al obtener datos:", error.message);
        }
    });
}       
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
            

            