import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  pure: false // means switch off the caching
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  // transform(value: any, ...args: any): any {
  //   return null;
  // }

  transform(key: any): any {
    return this.translate.data[key] || key;
  }

}
