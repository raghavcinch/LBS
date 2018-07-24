import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'where',
    pure: false
})
export class IndexFilter implements PipeTransform {
    transform(fields: any[],expression,value): any {
        debugger;
        return fields.filter((e) => expression(e,value));
      }
}