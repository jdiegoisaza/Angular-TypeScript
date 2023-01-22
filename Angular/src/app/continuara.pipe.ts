import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(value: string): string {
    if(value.toString().length>160){
      value=value.substring(0,160);

    }
    return value + "  .Continuara...";
  }

}
