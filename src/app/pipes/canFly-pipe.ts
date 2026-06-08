import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(canfly: boolean): string {
    console.log(canfly);
    return canfly ? 'Puede volar' : 'No puede volar';
  }
}
