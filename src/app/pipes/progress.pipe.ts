import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progress'
})

export class ProgressPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(status: boolean): SafeHtml {

    let alert = '<span class="badge bg-success">done</span>';

    if (!status) {
      alert = '<span class="badge bg-danger">Todo</span>';
    }

    return this.sanitizer.bypassSecurityTrustHtml(alert);
  }
}
