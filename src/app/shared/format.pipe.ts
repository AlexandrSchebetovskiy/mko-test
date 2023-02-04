import {Injectable, Pipe, PipeTransform} from "@angular/core";
import {DatePipe} from "@angular/common";

@Pipe({name: 'format'})
export class FormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {
  }
  transform(value: string, type: string, format= ''): string|null {
    if(type === 'date') {
      return this.datePipe.transform(value, format)
    }
    if(type === 'message') {
      return this.truncate(value)
    }
    return value
  }

  private truncate(value: string) {
    return value.length > 100 ?  value.slice(0, 100) + '...' : value
  }

}
