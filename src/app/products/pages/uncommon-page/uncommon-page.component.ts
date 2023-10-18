import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Alejandro';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  changeClient():void {
    this.name = 'Pepe';
    this.gender = 'female';
  }

  // i18n Plural

  public clients: string[] = ['Juan', 'Pepe', 'Jose', 'Alejandro', 'Maria', 'Sonia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue pipe
  public person = {
    name: 'Alejandro',
    age: 23,
    address: 'Sinaloa, México'
  }

  // Async pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap: ', value) )
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  });
}
