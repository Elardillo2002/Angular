//app-root
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  usuario = 'Elardillo';

  recibirMensajeDelHijo(evento: string) {
    alert(evento);
  }
}
