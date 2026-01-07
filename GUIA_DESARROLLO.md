# Guía de Desarrollo - BikeShop

## Sistema de Base de Datos con localStorage

### Conceptos Clave

El proyecto utiliza localStorage como base de datos simulada. Cada "tabla" es una clave diferente en localStorage que almacena un array JSON.

### Funciones Principales

#### 1. Gestión del Carrito

```javascript
// Obtener carrito
function obtenerCarrito() {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

// Guardar carrito
function guardarCarrito(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
  actualizarContadorCarrito()
}

// Agregar producto
function agregarAlCarrito(productoId) {
  const cart = obtenerCarrito()
  const itemExistente = cart.find((item) => item.id === productoId)
  
  if (itemExistente) {
    itemExistente.cantidad++
  } else {
    cart.push({ ...producto, cantidad: 1 })
  }
  
  guardarCarrito(cart)
}
```

#### 2. Gestión de Pedidos

```javascript
// Guardar pedido
function guardarPedido(pedido) {
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || []
  pedidos.push(pedido)
  localStorage.setItem("pedidos", JSON.stringify(pedidos))
}

// Generar ID único
function generarIdPedido() {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000)
  return `${timestamp}${random}`
}
```

#### 3. Gestión de Reservas

```javascript
// Guardar reserva
function guardarReserva(reserva) {
  const reservas = JSON.parse(localStorage.getItem("reservas")) || []
  reservas.push(reserva)
  localStorage.setItem("reservas", JSON.stringify(reservas))
}

// Cancelar reserva
function cancelarReserva(fechaReserva) {
  const reservas = JSON.parse(localStorage.getItem("reservas")) || []
  const actualizadas = reservas.filter(r => r.fechaReserva !== fechaReserva)
  localStorage.setItem("reservas", JSON.stringify(actualizadas))
}
```

## Flujos de Trabajo

### Flujo de Compra

1. Usuario navega productos en `bicicletas.html` o `accesorios.html`
2. Hace clic en "Añadir al Carrito"
3. `agregarAlCarrito()` actualiza localStorage
4. Contador del carrito se actualiza automáticamente
5. Usuario va a `carrito.html`
6. Puede ajustar cantidades o eliminar productos
7. Hace clic en "Proceder al Checkout"
8. En `checkout.html` completa sus datos
9. Al confirmar, se crea un pedido con ID único
10. Pedido se guarda en localStorage
11. Carrito se limpia
12. Modal de confirmación muestra detalles
13. Usuario puede ver el pedido en su perfil

### Flujo de Reserva de Servicio

1. Usuario va a `servicios.html`
2. Hace clic en "Reservar" en un servicio
3. Se muestra formulario dinámico
4. Usuario completa datos y fecha/hora
5. Al enviar, se valida el formulario
6. Reserva se guarda en localStorage
7. Modal de confirmación aparece
8. Usuario puede ver la reserva en su perfil
9. Puede cancelar la reserva desde el perfil

## Patrón de Desarrollo

### 1. Leer antes de escribir
```javascript
// Siempre obtener datos actuales primero
const datos = JSON.parse(localStorage.getItem("clave")) || []
```

### 2. Modificar
```javascript
// Realizar cambios en el array
datos.push(nuevoDato)
// o
const index = datos.findIndex(d => d.id === id)
datos[index] = datoModificado
```

### 3. Guardar
```javascript
// Guardar de vuelta en localStorage
localStorage.setItem("clave", JSON.stringify(datos))
```

### 4. Actualizar UI
```javascript
// Siempre actualizar la interfaz después de cambios
renderizarDatos()
actualizarContadores()
```

## Debugging

### Inspeccionar localStorage

Abre la consola del navegador y ejecuta:

```javascript
// Ver todo el contenido
console.log(localStorage)

// Ver carrito
console.log(JSON.parse(localStorage.getItem("cart")))

// Ver pedidos
console.log(JSON.parse(localStorage.getItem("pedidos")))

// Ver reservas
console.log(JSON.parse(localStorage.getItem("reservas")))

// Limpiar todo (CUIDADO)
localStorage.clear()
```

### Logs de Desarrollo

El código incluye console.log con prefijo [v0] para debugging:

```javascript
console.log("[v0] Carrito actualizado:", cart)
```

## Mejores Prácticas

1. **Siempre validar JSON.parse**
```javascript
const datos = localStorage.getItem("clave")
const array = datos ? JSON.parse(datos) : []
```

2. **Usar try-catch para operaciones críticas**
```javascript
try {
  const datos = JSON.parse(localStorage.getItem("clave"))
} catch (error) {
  console.error("Error al leer datos:", error)
  return []
}
```

3. **Actualizar contadores en cada cambio**
```javascript
function guardarCarrito(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
  actualizarContadorCarrito() // Importante!
}
```

4. **IDs únicos para nuevos registros**
```javascript
const id = Date.now() + Math.random()
```

## Solución de Problemas Comunes

### El contador del carrito no se actualiza
**Solución:** Asegurarse de llamar `actualizarContadorCarrito()` después de cada cambio.

### Los datos desaparecen al recargar
**Problema:** No se está guardando en localStorage correctamente.
**Solución:** Verificar que se usa `JSON.stringify()` al guardar.

### Formularios no se muestran
**Problema:** Event listener no configurado correctamente.
**Solución:** Verificar que se usa `e.preventDefault()` y la lógica de toggle.

### Pedidos duplicados
**Problema:** No se genera ID único.
**Solución:** Usar timestamp + random para IDs únicos.

## Extensiones Futuras

### Agregar Búsqueda Avanzada
```javascript
function busquedaAvanzada(filtros) {
  return todosProductos.filter(p => {
    if (filtros.precio) {
      if (p.precio > filtros.precioMax) return false
    }
    if (filtros.categoria) {
      if (p.categoria !== filtros.categoria) return false
    }
    return true
  })
}
```

### Agregar Sistema de Favoritos
```javascript
function toggleFavorito(productoId) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
  const index = favoritos.findIndex(f => f.id === productoId)
  
  if (index > -1) {
    favoritos.splice(index, 1)
  } else {
    const producto = todosProductos.find(p => p.id === productoId)
    favoritos.push(producto)
  }
  
  localStorage.setItem("favoritos", JSON.stringify(favoritos))
}
```

### Agregar Historial de Navegación
```javascript
function agregarAlHistorial(producto) {
  const historial = JSON.parse(localStorage.getItem("historial")) || []
  
  // Eliminar si ya existe
  const filtered = historial.filter(h => h.id !== producto.id)
  
  // Agregar al inicio
  filtered.unshift(producto)
  
  // Limitar a 10 productos
  const limitado = filtered.slice(0, 10)
  
  localStorage.setItem("historial", JSON.stringify(limitado))
}
```

## Conclusión

Este sistema de base de datos con localStorage es perfecto para prototipos y aplicaciones del lado del cliente. Para producción, se recomienda migrar a un backend real con base de datos SQL o NoSQL.
