import { Pipe, PipeTransform, Sanitizer, SecurityContext } from '@angular/core';

@Pipe({
  name: 'bold',
})
export class BoldPipe implements PipeTransform {
  constructor(private sanitizer: Sanitizer) {}

  transform(value: string, regex: any): any {
    return this.sanitize(this.replace(value, regex));
  }

  replace(str: string, regex: any) {
    return str.replace(new RegExp(`(${regex})`, 'gi'), '<b>$1</b>');
  }

  sanitize(str: string) {
    return this.sanitizer.sanitize(SecurityContext.HTML, str);
  }
}
