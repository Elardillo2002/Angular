import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})

export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  ngOnInit(): void {
    console.log("ngOnInit del componente saludo.");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges. El componente recibe cambios.");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy. El componente va a desaparecer.");
  }

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  @Input() nombre: string = "Anónimo"; // Anónimo es un valor por defecto
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  // Evento de click
  enviarMensajeAlPadre(): void {
    // alert(`Hola ${this.nombre}. \nAlerta producida desde un click`);
    this.mensajeEmitter.emit(`Hola ${this.nombre}. \nAlerta producida desde un click`);
  }
}
