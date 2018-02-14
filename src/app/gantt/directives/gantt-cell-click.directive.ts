import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { BodyCellEventService } from '../services/body-cell-event.servise';

@Directive({
  selector: '[appCellClick]'
})
export class GanttCellClickDirective {
  @Input() public day;
  constructor(private el: ElementRef,
  private cellService: BodyCellEventService) {
    console.log('test');
  }
  @HostListener('click', ['$event']) onClick(event) {
    this.cellService.cell = this.day;
  }
}
