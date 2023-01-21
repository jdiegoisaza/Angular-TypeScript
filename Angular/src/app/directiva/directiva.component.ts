import { Component, OnInit } from '@angular/core';
interface producto{
  nombre:String;
  stock:number;
fabricante:String;
fechaVence:Date;
esImportante: boolean;
}
@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})

export class DirectivaComponent implements OnInit {
  cargando:boolean = true;
  nombres: Array<String>= ["Maria","Ana","Juan","Pedro"]
  productos:Array<producto>=[
    {
      nombre:'arroz',
      stock:15,
      fabricante:"ddsin",
      fechaVence: new Date('04/04/2022'),
      esImportante: true
    },
    {
      nombre:'Maiz',
      stock:1,
      fabricante:"123",
      fechaVence: new Date('04/04/2021'),
      esImportante: false
    },
    {
      nombre:'malta',
      stock:5,
      fabricante:"xyz",
      fechaVence: new Date('04/04/2020'),
      esImportante: true
    }
  ]
  pestana:String="";
  mostarCuadrado:boolean = false;


  mostrarCargando(){
    this.cargando=true;

  }
  alternar(){
    this.cargando=!this.cargando;
  }
  cambiarPestana(pestana:String){
    this.pestana=pestana;
  }

  alternarFondo(){
    this.mostarCuadrado=!this.mostarCuadrado;
  }

  ngOnInit() {
    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }
}
