import { Component } from '@angular/core';

class Alumno{
  nombre: string="";
  apellido: string="";
  excelencia:boolean=false;
}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent {
  alumno:Alumno = new Alumno;
  listadoAlumnos:Array<Alumno>=new Array<Alumno>;


  agregarAlumno(){
    this.listadoAlumnos.push({
      nombre :this.alumno.nombre,
      apellido :this.alumno.apellido,
      excelencia:this.alumno.excelencia
    })
    this.alumno.nombre="";
    this.alumno.apellido="";
    this.alumno.excelencia=false;

    console.log(this.listadoAlumnos);
  }
}
