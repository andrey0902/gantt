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
  constructor(private service: GanttService,
              private barsService: BarsEventService) { }

  ngOnInit() {
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
}
