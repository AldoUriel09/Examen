import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: string;
  imagen: string;
  detalles: string;
  mostrarDetalles:boolean;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'PC GAMER RYZEN 7 5700X 32GB RAM DDR4(2X16)SSD 1TBM.2',
      descripcion : 'TARJETA DE VIDEO GEFORCERTX4060 ENFRIAMIENTO LIQUIDO FUENTE PODER XPG 750W 80 PLUS MONITOR DE 21 PULGADAS INCLUIDO TECLADO MOUSE',
      precio: '$22,199',
      imagen: '/img/gabinete1.jpg',
      detalles: 'Marca: 	PSA COMPUTO Y PAPELERIA, Sistema operativo	Chrome OS, Modelo de CPU	1.2GHz Cortex A9 Processor',
      mostrarDetalles: false // <- esta propiedad es clave
    },
    {
      id: 2,
      nombre: 'GeForce RTX 5080 WINDFORCE ',
      descripcion: 'Tarjeta gráfica - 16GB GDDR7, 256bit, PCI-E 5.0, 2670MHz Core Clock, 3 x DP 2.1a, 1 x HDMI 2.1b, GV-N5080WF3OC-16GD',
      precio: '$30,491',
      imagen: '/img/rtx5090.jpg',
      detalles: 'Coprocesador de gráficos	GeForce RTX 5080 Marca	GIGABYTE, Tamaño de RAM para gráficos	16 GB, Velocidad del reloj GPU	2670 MHz, Interfaz de salida de video	DisplayPort',
      mostrarDetalles: false // <- esta propiedad es clave
    },
    {
      id: 3,
      nombre: 'Intel Procesador Core™ i9-14900KS',
      descripcion: 'Para Equipos de sobremesa, 24 núcleos (8 núcleos P + 16 núcleos electrónicos)',
      precio: '$18,935',
      imagen: '/img/inteli9.jpg',
      detalles: 'Marca	Intel, Fabricante del CPU	Intel, Modelo de CPU	Core i9, Velocidad de CPU	6,2 GHz, Enchufe de CPU	LGA 1700',
      mostrarDetalles: false // <- esta propiedad es clave
    },
   {
      id: 4,
      nombre: 'AMD Ryzen 9 9950X3D',
      descripcion: 'Procesador de 16 núcleos 100-100000719WOF',
      precio: '$15,189',
      imagen: '/img/amd9.jpg',
      detalles: 'Marca	AMD, Fabricante de CPU	AMD, Modelo de CPU	Desconocido, Velocidad de la CPU	4,3 GHz, Zócalo de CPU	Socket AM5',
      mostrarDetalles: false // <- esta propiedad es clave
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
