/* 1. ingrese su nombre (saludo de bienvenida)
2. Aqui puedes ver nuestros productos (lista de productos)
3. ingrese el nombre del producto que desea comprar
4. desea agregar algun otro producto S/N?
5. total a pagar es
*/

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class ProductoCarritoCompra {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    calcularValorProducto() {
        const valorPorProducto = this.producto.precio * this.cantidad;
        return valorPorProducto;
    }
}

class CarritoCompra {
    constructor() {
        this.productosCarritoCompra = [];
    }
    agregarPersona(persona) {
        this.persona = persona;
    }
    agregarItem(productoCarritoCompra) {
        this.productosCarritoCompra.push(productoCarritoCompra);
    }
    calcularTotal() {
        let valorTotal = 0;
        for (const productoCarritoCompraAgregado of this.productosCarritoCompra) {
            const valorPorProducto = productoCarritoCompraAgregado.calcularValorProducto();
            valorTotal = valorTotal + valorPorProducto;
        }
        return valorTotal;
    }
}


class Prueba {
    constructor() {
        this.stockProductos = [
            new Producto(1, "Epidermal repair", 20000),
            new Producto(2, "Hydrating", 25000),
            new Producto(3, "Resveratrol", 315000),
            new Producto(4, "Intensifier", 22000),
            new Producto(5, "Ce Ferulic", 35000),
            new Producto(6, "Age Interrupter", 38000),
            new Producto(7, "Phloretin", 290000),
            new Producto(8, "Phyto Corrective", 32000),
            new Producto(9, "Aox eye gel", 27000),
            new Producto(10, "Retinol", 30000),
        ];
    }
    crearMensajeProductos() {
        let mensajeProductos = "Te mostramos nuestros productos:\n";
        for (const stockProducto of this.stockProductos) {
            mensajeProductos += `${stockProducto.nombre} $ ${stockProducto.precio}\n `;
        }
        return mensajeProductos;
    }
    compararSiSonIguales(valor1, valor2) {
        return valor1.toLowerCase() === valor2.toLowerCase();
    }
    inicializar() {
        const valorNombre = prompt("Ingrese su nombre");
        const persona = new Persona(valorNombre);

        alert(`Hola ${persona.nombre} Bienvenido a Alma Estetica `);

        const mensajeCreado = this.crearMensajeProductos();
        alert(mensajeCreado);

        const carrito = new CarritoCompra();
        carrito.agregarPersona(persona);

        //AQUI SE ITERA
        let deseaContinuar = "";

        do {
            let nombreProductoDeseado = prompt("Ingrese el nombre del producto que desea comprar");

            let encontrado = this.stockProductos.some((item) => this.compararSiSonIguales(item.nombre, nombreProductoDeseado));

            if (encontrado) {
                let cantidadPrompt = prompt("Que cantidad necesita");
                let cantidad = Number(cantidadPrompt);

                let productoEncontrado = this.stockProductos.find((item) => this.compararSiSonIguales(item.nombre, nombreProductoDeseado));

                const productoCarritoCompra = new ProductoCarritoCompra(productoEncontrado, cantidad);

                carrito.agregarItem(productoCarritoCompra);
            }
            else {
                alert("Producto no encontrado");
            }

            deseaContinuar = prompt("Desea agreagar otro producto S/N");

        } while (this.compararSiSonIguales(deseaContinuar, "S"));


        const totalApagar = carrito.calcularTotal();
        alert(`total a pagar es ${totalApagar} `);

    }
}

const prueba = new Prueba();
prueba.inicializar();








/*function getProductQuestionByIndex(index) {
    switch (index) {
        case 0:
            return "Desea comprar el Epidermal repair $20.000 (S/N)";
        case 1:
            return "Desea comprar el Hydrating $25.000 (S/N)";
        case 2:
            return "Desea comprar el Resveratrol $31.500 (S/N)";
        case 3:
            return "Desea comprar el Intensifier $22.000 (S/N)";
        case 4:
            return "Desea comprar el Ce Ferulic $35.000 (S/N)";
        case 5:
            return "Desea comprar el Age Interrupter $38.000 (S/N)";
        case 6:
            return "Desea comprar el Phloretin $29.000 (S/N)";
        case 7:
            return "Desea comprar el Phyto Corrective $20.000 (S/N)";
        case 8:
            return "Desea comprar el Aox eye gel $27.000 (S/N)";
        case 9:
            return "Desea comprar el Retinol $30.000 (S/N)";

    }
}

function getProductValueByIndex(index) {
    switch (index) {
        case 0:
            return 20000;
        case 1:
            return 25000;
        case 2:
            return 31500;
        case 3:
            return 22000;
        case 4:
            return 35000;
        case 5:
            return 38000;
        case 6:
            return 29000;
        case 7:
            return 20000;
        case 8:
            return 27000;
        case 9:
            return 30000;
    }
}
*/



/*while (nombres != "salir") {
    let encontrado = productos.find((item) => item.nombres === nombres);

    if(encontrado){
        alert(`
        id: ${encontrado.id}
        id: ${encontrado.nombre}
        id: ${encontrado.precio}`);
    }else{
        alert("El producto no esta disponible");

        nombres = prompt("Ingrese el producto que desea comprar");

    }
}
*/





//------------------------------------------------

// function iterador(arreglo, funcion) {
//     for (const item of  productos) {
//         getProductValueByIndex(item)
//     }
// }

// iterador(productos, getProductValueByIndex);
// console.log(iterador);

// for (const item of productos) {
//     console.log(item.nombre);
//     console.log(item.precio);
// }
