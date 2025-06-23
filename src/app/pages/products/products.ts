import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-products',
  imports: [FormsModule], // ✅ agregar FormsModule aquí
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  productos : Product[] = [];
  constructor(private product:Products){
    this.productos = this.product.getProducts();
  }
  toggleDetalles(producto: any) {
    producto.mostrarDetalles = !producto.mostrarDetalles;
  }
  categorias = ['Todos', 'PC', 'Tarjeta gráfica', 'Procesador'];
categoriaSeleccionada = 'Todos';

get productosFiltrados(): Product[] {
  if (this.categoriaSeleccionada === 'Todos') {
    return this.productos;
  }
  return this.productos.filter(p => p.categoria === this.categoriaSeleccionada);
}
}
