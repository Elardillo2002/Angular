import { Component } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {
  // Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  // Inyectamos en el constructor el servicio de Contactos
  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    this.listaContactos = this.contactoService.obtenerContactos();
    console.table(this. listaContactos);
  }

  obtenerContacto(id: number) {
    this.contactoSeleccionado = this.contactoService.obtenerContactoPorID(id);
  }
}
