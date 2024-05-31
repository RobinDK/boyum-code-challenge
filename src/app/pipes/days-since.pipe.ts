import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSince'
})
export class DaysSincePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: number): SafeHtml {

    let createdDate = new Date(Number(value));

    if (isNaN(Number(createdDate.getMonth() + 1)) || isNaN(Number(createdDate.getDate())) || isNaN(Number(createdDate.getFullYear()))) {
      return '';
    }

    let currentDate = new Date();

    let dateFormat = Math.round((currentDate.getTime() - createdDate.getTime()) / (1000 * 3600 * 24));

    return this.sanitizer.bypassSecurityTrustHtml(`<strong>Days old</strong> ${dateFormat}`);

  }
}
