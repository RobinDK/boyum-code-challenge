import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: number): SafeHtml {
    let date = new Date(Number(value));
    let dateFormat = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

    if (isNaN(Number(date.getMonth() + 1)) || isNaN(Number(date.getDate())) || isNaN(Number(date.getFullYear()))) {
      dateFormat = '<span class="badge bg-danger">Invalid date</span>';
    }
    return this.sanitizer.bypassSecurityTrustHtml(dateFormat);
  }
}