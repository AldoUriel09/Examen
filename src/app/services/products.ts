import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Gabinete',
      descripcion : 'Ideal para jugar',
      precio: 4000,
      imagen: '/img/gabinete.webp'
    },
    {
      id: 2,
      nombre: 'GEFORCE RTX 4060',
      descripcion: 'Tarjeta grafica Potente',
      precio: 6000,
      imagen: '/img/GEFORCE_RTX.jpg'
    },
    {
      id: 3,
      nombre: 'INTEL CORE I9',
      descripcion: 'Procesador potente',
      precio: 3000,
      imagen: '/img/INTEL_CORE.jpg'
    },
   {
      id: 4,
      nombre: 'RYZEN 9',
      descripcion: 'Procesador Moderno',
      precio: 4000,
      imagen: '/img/AMD_RYZEN.webp'
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
