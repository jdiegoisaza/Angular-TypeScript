import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  titulo: string = " titulo";
  dinero: number = 2400;
  ganancias:number = 0.54;
  nacimiento:Date = new Date('10-31-1994')

}
