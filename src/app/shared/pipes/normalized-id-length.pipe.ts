import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeIdLength'
})
export class NormalizeIdLengthPipe implements PipeTransform {
  transform(nr: any, n: any, str?: any): string {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
  }
}
