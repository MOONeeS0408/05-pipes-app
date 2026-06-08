import { Pipe, type PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorPipe',
})
export class ColorPipe implements PipeTransform {
  transform(value: Color): string {
    switch (value) {
      case 0:
        return Color[0];
      case 1:
        return Color[1];
      case 2:
        return Color[2];
      case 3:
        return Color[3];
      default:
        return '';
    }
    //return Color[value];
  }
}
