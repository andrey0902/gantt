import { Component, Input, OnInit } from '@angular/core';
import { GanttService } from '../../services/gantt.service';
import { BarsEventService } from '../../services/bars-event.servise';

@Component({
  selector: 'app-bars-item',
  templateUrl: './bars-item.component.html',
  styleUrls: ['./bars-item.component.scss']
})
export class BarsItemComponent implements OnInit {
  @Input() public subTask;
  public options: any;
  constructor(private service: GanttService,
              private barsService: BarsEventService) { }

  ngOnInit() {
    this.options = this.service.options;
  }

  public getStart() {
   return this.service.getStartBars(this.subTask);
  }

  public getWidth() {
   return this.service.getWidthBars(this.subTask);
  }

  public onClick() {
    this.barsService.bars = this.subTask;
  }

  public prepareTooltip() {
    if (this.options.typeTooltip && this.subTask[this.options.typeTooltip]) {
      return this.subTask[this.options.typeTooltip];
    }
    return '';
  }

  public bgColor(status, progress?) {
    status = status.toLowerCase();

    if (progress) {
     return this.service.options.color[status][1];
    } else {
      return this.service.options.color[status][0];
    }
  }
}
