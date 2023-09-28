class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  obtenerEstadoStock() {
    if (this.stock < 1000) {
      return "Crítico";
    } else {
      return "Suficiente";
    }
  }
}

class Inventario {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  verificarStockCritico() {
    let stockCritico = false;

    for (let producto of this.productos) {
      if (producto.stock < 1000) {
        stockCritico = true;
        document.write(`El producto ${producto.nombre} tiene un stock crítico (${producto.stock} unidades). Estado: ${producto.obtenerEstadoStock()}<br>`);
      } else {
        document.write(`El producto ${producto.nombre} tiene un stock suficiente (${producto.stock} unidades). Estado: ${producto.obtenerEstadoStock()}<br>`);
      }
    }

    if (!stockCritico) {
      document.write("El inventario está en buen estado, todos los productos tienen suficiente stock.");
    }
  }
}

let numArticulos = parseInt(prompt("Ingresa el número de artículos que quieres agregar:"));
let inventario = new Inventario();

for (let i = 1; i <= numArticulos; i++) {
  let nombre = prompt(`Ingresa el nombre del producto ${i}:`);
  let precio = parseFloat(prompt(`Ingresa el precio del producto ${i}:`));
  let stock = parseInt(prompt(`Ingresa el stock del producto ${i}:`));

  let producto = new Producto(nombre, precio, stock);
  inventario.agregarProducto(producto);
}

// Verificar estado de stock
inventario.verificarStockCritico();
