import { Component } from '@angular/core';

export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.css']
})

export class ListaBasicaComponent {
  listaElementos: Producto[] = [{
    nombre: "Leche",
    precio: 10,
    descripcion: "Leche entera"
  },
   {
    nombre: "Carne",
    precio: 20,
    descripcion: "Cerdo"
   }
];
  cargando: boolean = false;

  opcion: number = 0;

  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number) {
    this.opcion = opcionEscogida; // el valor cambia, implica un cambio en los elementos renderizados

  }
}
