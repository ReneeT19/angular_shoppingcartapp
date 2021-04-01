import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    //takes a value:any and a args>:any
    transform(value:string, limit?: number) {
        if(!value) {
            return null;
        }

        let actualLimit = (limit) ? limit: 50;
        return value.substr(0, actualLimit) + '...';
    }
}