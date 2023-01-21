import { Component } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent {
  nombre:string ='Juan';
  correo:String ='';
  password:String = '';


  ingresar(){
    console.log(this.correo)
    console.log(this.password)
  }
}
