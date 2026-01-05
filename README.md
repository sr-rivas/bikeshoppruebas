# BikeShop - Tienda de Bicicletas

Sitio web completo de tienda de bicicletas con HTML5, CSS3, JavaScript y Bootstrap 5.3

## Características Principales

### 🛒 Sistema de Carrito de Compras
- Base de datos completa con localStorage
- Agregar/eliminar productos
- Actualizar cantidades
- Persistencia entre sesiones
- Contador dinámico en la navegación

### 📦 Sistema de Pedidos
- Proceso completo de checkout
- Formulario de datos personales y envío
- Múltiples métodos de pago
- Generación de ID único para cada pedido
- Almacenamiento de pedidos en localStorage
- Visualización de historial de pedidos en perfil

### 👤 Perfil de Usuario
- Información personal editable
- Historial de pedidos con detalles
- Gestión de reservas de servicios
- Sistema de favoritos (preparado para implementar)

### 🛠️ Sistema de Reservas de Servicios
- Formularios dinámicos para cada servicio
- Validación de campos requeridos
- Selección de fecha y hora
- Almacenamiento en localStorage
- Confirmación visual con modal

### 🔍 Búsqueda y Filtros
- Búsqueda en tiempo real
- Filtros por categoría
- Sistema de filtrado múltiple
- Resultados instantáneos

## Estructura de Base de Datos (localStorage)

### 1. Carrito de Compras
**Clave:** `cart`
```javascript
[
  {
    id: 1,
    nombre: "Mountain Pro X1",
    precio: 899.99,
    imagen: "/bicicleta-montana-profesional.jpg",
    cantidad: 2,
    tipo: "bicicleta",
    talla: 27,    // opcional
    color: "rojo" // opcional
  }
]
```

### 2. Pedidos
**Clave:** `pedidos`
```javascript
[
  {
    id: "1703012345678123",
    fecha: "2024-01-15T10:30:00.000Z",
    cliente: {
      nombre: "Juan Pérez",
      email: "juan@gmail.com",
      telefono: "+5593999999999",
      identificacion: "1-2345-6789"
    },
    direccion: {
      provincia: "Pichincha",
      canton: "Quito",
      parroquia: "Ccarapungo",
      codigoPostal: "17101",
      direccionDetallada: "100m norte de la iglesia"
    },
    metodoPago: "efectivo", // o "transferencia"
    productos: [...], // array de productos
    subtotal: 1799.98,
    iva: 233.99,
    envio: 15.00,
    total: 2048.97,
    estado: "pendiente" // "pendiente", "enviado", "entregado"
  }
]
```

### 3. Reservas de Servicios
**Clave:** `reservas`
```javascript
[
  {
    servicio: "Mantenimiento Básico",
    precio: "29.99",
    nombre: "María González",
    email: "maria@email.com",
    telefono: "+59399999999",
    fecha: "2024-01-20",
    hora: "14:00",
    nota: "Mi bicicleta tiene problemas con los frenos",
    fechaReserva: "2024-01-15T10:45:00.000Z"
  }
]
```

### 4. Usuario
**Clave:** `usuario`
```javascript
{
  nombre: "Usuario X",
  email: "usuario@email.com",
  telefono: "+593999999999",
  direccion: "Calle Principal 123, Ciudad",
  fechaRegistro: "2024-01-01T00:00:00.000Z"
}
```

### 5. Favoritos
**Clave:** `favoritos`
```javascript
[
  {
    id: 1,
    nombre: "Mountain Pro X1",
    precio: 899.99,
    imagen: "/bicicleta-montana-profesional.jpg",
    tipo: "bicicleta"
  }
]
```

## Archivos del Proyecto

### Páginas HTML
- `index.html` - Página principal con productos destacados
- `bicicletas.html` - Catálogo de bicicletas con filtros
- `accesorios.html` - Catálogo de accesorios
- `servicios.html` - Servicios con formularios de reserva
- `sobre-nosotros.html` - Información de la empresa
- `contacto.html` - Formulario de contacto
- `carrito.html` - Vista del carrito de compras
- `checkout.html` - Proceso de finalización de compra
- `perfil.html` - Perfil de usuario y pedidos

### JavaScript
- `script.js` - Funciones principales y base de datos de productos
- `bicicletas.js` - Lógica del catálogo de bicicletas
- `accesorios.js` - Lógica del catálogo de accesorios
- `servicios.js` - Gestión de reservas de servicios
- `contacto.js` - Validación del formulario de contacto
- `carrito.js` - Gestión del carrito de compras
- `checkout.js` - Proceso de checkout y creación de pedidos
- `perfil.js` - Gestión del perfil y visualización de datos

### Estilos
- `styles.css` - Estilos personalizados con variables CSS

## Funcionalidades Corregidas

### ✅ Problema 1: Formularios de Servicios
**Problema:** Los formularios no se mostraban al hacer clic en "Reservar"

**Solución:** 
- Agregado `e.preventDefault()` en el event listener
- Corregida la lógica de toggle del formulario
- Mejorado el cambio de texto del botón

### ✅ Problema 2: Sistema de Compras en Carrito
**Problema:** No había un sistema completo de base de datos para las compras

**Solución:**
- Implementado sistema completo de checkout
- Creada página `checkout.html` con formulario completo
- Generación automática de ID únicos para pedidos
- Almacenamiento de pedidos en localStorage
- Cálculo automático de subtotal, IVA y envío
- Validación de todos los campos del formulario

### ✅ Problema 3: Página de Perfil de Usuario
**Problema:** No existía la página de perfil

**Solución:**
- Creada página `perfil.html` completa
- Implementado sistema de edición de perfil
- Vista de historial de pedidos con detalles
- Vista de reservas de servicios
- Sistema de favoritos preparado
- Pestañas para organizar la información

## Características Especiales

### 🎨 Efectos Visuales
- Tarjetas con efecto hover (elevación y cambio de borde)
- Animaciones suaves en modales y formularios
- Transiciones fluidas entre estados
- Notificaciones toast para acciones del usuario

### 📱 Diseño Responsive
- Compatible con móviles, tablets y escritorio
- Menú de navegación colapsable
- Imágenes adaptativas
- Grid system de Bootstrap optimizado

### ♿ Accesibilidad
- Etiquetas ARIA apropiadas
- Contraste de colores adecuado
- Navegación por teclado
- Texto alternativo en imágenes

### 🔒 Validaciones
- Validación de campos requeridos
- Validación de formato de email
- Validación de formato de teléfono
- Prevención de fechas pasadas en reservas
- Validación de cantidades en carrito

## Integración de WhatsApp

Botón flotante de WhatsApp en todas las páginas que permite contacto directo.

## Navegación

### Header
- Logo con enlace a inicio
- Menú de navegación responsive
- Buscador con resultados en tiempo real
- Contador de carrito dinámico
- Enlace a perfil de usuario

### Footer
- Información de contacto
- Enlaces rápidos
- Terminos legales
- Redes sociales
- Copyright

## Botones de Utilidad

- **Botón Subir:** Aparece al hacer scroll, lleva al inicio de página
- **Botón WhatsApp:** Contacto directo flotante
- **Contador Carrito:** Muestra cantidad total de productos

## Cómo Usar el Sistema

### Para Comprar:
1. Navegar por bicicletas o accesorios
2. Hacer clic en "Añadir al Carrito"
3. Ver el carrito y ajustar cantidades
4. Proceder al checkout
5. Completar información personal y de envío
6. Confirmar pedido
7. Ver pedido en el perfil

### Para Reservar Servicio:
1. Ir a la página de Servicios
2. Seleccionar el servicio deseado
3. Hacer clic en "Reservar"
4. Completar el formulario
5. Confirmar reserva
6. Ver reserva en el perfil

### Para Gestionar Perfil:
1. Hacer clic en el icono de perfil
2. Ver historial de pedidos
3. Ver reservas activas
4. Editar información personal
5. Cancelar reservas si es necesario

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica
- **CSS3:** Estilos modernos con variables
- **JavaScript ES6+:** Lógica de aplicación
- **Bootstrap 5.3:** Framework CSS
- **Bootstrap Icons:** Iconografía
- **localStorage:** Base de datos del navegador

## Notas Importantes

- Todos los datos se almacenan localmente en el navegador
- Los datos persisten entre sesiones
- No hay backend real, es una simulación completa
- Las imágenes de productos estan en sus respectivas carpetas
- El código está completamente comentado para fácil mantenimiento
- En la sección legal estan sus respectivas plantillas, modificar segun convenga

## Mejoras Futuras Sugeridas

1. Implementar sistema de favoritos completo con botones en productos
2. Agregar sistema de calificaciones y reseñas
3. Implementar comparador de productos
4. Agregar galería de imágenes en detalle de producto
5. Sistema de cupones de descuento
6. Integración con APIs de pago reales
7. Sistema de rastreo de pedidos
8. Notificaciones por email (requiere backend)
9. Chat en vivo para soporte
10. Integración con redes sociales para compartir

## Autor

BikeShop - Tienda Completa de Bicicletas
Desarrollado con ❤️ siguiendo los mejores estándares web
