const facturacionRouter = require('express').Router(); // Router sigue siendo adecuado
const user = require('../models/user'); // Cambié "user" a "User" para que represente mejor el modelo
const facturacionModel = require('../models/facturacion1'); // Cambié "Producto" a "facturacionModel" para reflejar que es un modelo
const mongoose = require('mongoose');

const Facturacion = require('../models/facturacion1'); 


facturacionRouter.post("/", async (req, res) => {
    try {
        const {
            cliente,
            productos, // String o Array
            Pprecio,
            cedula,
            metodo,
            moneda,
            precio,
            conversion,
            tasa,
            factura,
            fecha
        } = req.body;

        // Validaciones estrictas para campos obligatorios
        if (!cliente) return res.status(400).json({ error: "El campo 'cliente' es obligatorio." });
        if (!productos || productos.length === 0) return res.status(400).json({ error: "El campo 'productos' no puede estar vacío." });
        if (!factura) return res.status(400).json({ error: "El campo 'factura' es obligatorio." });
        if (!cedula) return res.status(400).json({ error: "El campo 'cedula' es obligatorio." });
        if (!metodo) return res.status(400).json({ error: "El campo 'metodo' es obligatorio." });
        if (!moneda) return res.status(400).json({ error: "El campo 'moneda' es obligatorio." });
        if (!precio) return res.status(400).json({ error: "El campo 'precio' es obligatorio." });
        if (!fecha) return res.status(400).json({ error: "El campo 'fecha' es obligatorio." });

        // Verifica si `productos` es un array. Si no, conviértelo en un array.
        const guardarProductos = Array.isArray(productos) ? productos : [productos];
        console.log(guardarProductos)
console.log(guardarProductos)
        // Crea el documento con los datos
        const nuevaFactura = new Facturacion({
            cliente,
            productos: guardarProductos, // Guardar siempre como un array
            Pprecio,
            cedula,
            metodo,
            moneda,
            precio,
            conversion,
            tasa,
            factura,
            fecha,
            checked: false,
            user: req.user ? req.user._id : null // Si el usuario está autenticado
        });

        // Guardar en la base de datos
        const facturaGuardada = await nuevaFactura.save();
        return res.status(201).json(facturaGuardada); // Respuesta exitosa
    } catch (error) {
        console.error("Error al guardar la facturación:", error.message);
        return res.status(500).json({ error: "Error al guardar la factura.", detalle: error.message });


    }
});


facturacionRouter.patch("/:id", async (request,response)=> {
try {


    const {     nombreActualizado ,      cantidadActualizado, costoActualizado,  precioActualizado,  } = request.body;

    const actualizacionProducto = new facturacionModel({
        nombreActualizado ,      cantidadActualizado, costoActualizado,  precioActualizado,
  
    })
 
 const user = request.user; // Usuario autenticado
    if (!user) {
     return response.status(401).json({ error: 'Usuario no autenticado' });
  }

const productoId =  request.params.id; // ID del producto a eliminar
  console.log('ID del producto a eliminar:', productoId); // Log del ID
console.log(productoId)
console.log(nombreActualizado)
   //  Buscar el producto en la base de datos
await facturacionModel.findByIdAndUpdate(productoId , { nombre: `${nombreActualizado}` ,
    cantidad: `${cantidadActualizado}`,
    costo: `${costoActualizado}`,
    precio: `${precioActualizado}`
});

const producto = await facturacionModel.findById(productoId);
 console.log(user)

 
} catch (error){
    console.log(error)

 
    if (!producto) { 
        console.log('Producto no encontrado'); // si no existe
        return response.status(404).json({ error: 'Producto no encontrado' });
   }
}
})






// Ruta para manejar las solicitudes GET a /api/productos
facturacionRouter.get("/", async (request, response) => {
    try {
              const facturacion= await facturacionModel.find({});
    const facturacion2 =     facturacion.map(producto => ({
            ...producto.toObject()  }))

        response.json(facturacion2);
    } catch (error) {
        response.status(500).json({ error: 'An error occurred' });
    }
});
// Ruta para manejar las solicitudes DELETE a /api/productos/:id









facturacionRouter.delete("/:id", async (request, response) => {
    try {
        const user = request.user; // Usuario autenticado
        if (!user) {
            return response.status(401).json({ error: "Usuario no autenticado" });
        }

        const facturacionId = request.params.id;
        if (!mongoose.Types.ObjectId.isValid(facturacionId)) {
            return response.status(400).json({ error: "ID inválido" });
        }

        const factura = await facturacionModel.findById(facturacionId);
        if (!factura) {
            return response.status(404).json({ error: "Factura no encontrada" });
        }

        if (!factura.user || !user._id || factura.user.toString() !== user._id.toString()) {
            return response.status(403).json({ error: "No autorizado para eliminar esta factura" });
        }

        await facturacionModel.findByIdAndDelete(facturacionId);
        console.log("Factura eliminada correctamente");
        return response.status(204).end();
    } catch (error) {
        console.error("Error al eliminar la factura:", error);
        return response.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
});

facturacionRouter.patch("/:id", async (request, response) => {
    try {
      const { nombreActualizado, cantidadActualizado, costoActualizado, precioActualizado } = request.body;
      console.log({ nombreActualizado, cantidadActualizado, costoActualizado, precioActualizado });

      const user = request.user;
  
      if (!user) {
        return response.status(401).json({ error: 'Usuario no autenticado' });
      }
  
      const facturaId = request.params.id;
  
      const producto = await facturacionModel.findById(facturaId);
      if (!producto) {
        return response.status(404).json({ error: 'Producto no encontrado' });
      }
  
      await facturacionModel.findByIdAndUpdate(facturaId, {
        cliente: nombreActualizado,
    cedula: cantidadActualizado,
        metodo: costoActualizado,
        precio: precioActualizado
      });
      
  
      return response.status(200).json({ mensaje: 'Producto actualizado exitosamente' });
    } catch (error) {
      return response.status(500).json({ error: 'Error interno del servidor' });
    }
  });
  
module.exports = facturacionRouter;
