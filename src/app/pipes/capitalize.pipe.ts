import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
// Setting first character of string to upper case
export class CapitalizePipe implements PipeTransform {
  public transform(value: any) {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }

}
