# Inventary

Es un sistema para llevar inventario para pequeñas  o medianas empresas en el ambito de las opticas ....
---

## **Tecnologías utilizadas**

- **Diseño y prototipado:** Figma
- **Frontend:** HTML, CSS, TailwindCSS, JavaScript
- **Backend:** Node.js, Express
- **Base de datos:** MongoDB
- **Autenticación:** JSON Web Token (JWT), bcrypt, Cookie-Parser
- **Correo electrónico:** Nodemailer
- **Pdf:** JSPDF
---

## **Funcionalidades principales**

Registro y login con verificación por correo electrónico.  
 Gestión de inventario en tiempo real:

- **Entradas:** Registro histórico de productos que ingresan al inventario.
- **Stock:** Vista actual de todos los productos disponibles con un sistema de semáforo para identificar niveles críticos.
- **Salidas:** Registro histórico de las ventas (productos que salen del inventario).  
  Edición en tiempo real: las entradas y salidas pueden ser modificadas y los cambios se reflejan de inmediato.  
  Middleware para verificar la autenticación del usuario.  
  Sistema básico de gestión de errores.

---

## **Instalación y ejecución**

### 1. Clonar el repositorio

```bash
git clone  https://github.com/Dimarkos21/Inventary4.0
cd Inventary4.0
```

### 2. Instalar las dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

### 3. Ejecutar el servidor en modo desarrollo

```bash
npm run dev
```

### 4. Ejecutar en producción

```bash
npm run start
```

## **Dependencias**

El proyecto utiliza los siguientes paquetes:

- bcrypt → Encriptación de contraseñas
- cookie-parser → Manejo de cookies
- cors → Habilitación de CORS
- cross-env → Gestión de entornos
- dotenv → Manejo de variables de entorno
- express → Framework backend
- jsonwebtoken → Autenticación mediante tokens JWT
- mongoose → Conexión y manipulación de MongoDB
- morgan → Logger para desarrollo
- nodemailer → Envío de correos electrónicos
- nodemon → Recarga automática del servidor en modo desarrollo
- JsPDF →  nos ayuda a crear los pdf.
---

## **Autenticación**

El proyecto utiliza JWT y cookies para la autenticación:

- Los usuarios deben registrarse y verificar su correo mediante un enlace enviado por Nodemailer.
- El middleware comprueba si el usuario está logueado antes de permitir el acceso a rutas protegidas.
- Los tokens JWT se almacenan en cookies para validar la sesión del usuario.

---

## **Uso básico**

- /configuracion  →  Configuracion.
- /login → Inicio de sesión.
- /productos → Ver productos disponibles.
- /registrarse → Registro del usuario n.
- - /facturacion → Facturacion salidas.


---

## Autores

-Dimarkos Contreras.
