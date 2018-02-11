import { Component, Input, OnInit } from '@angular/core';
import { GanttService } from '../services/gantt.service';
import * as moment from 'moment';
moment.locale('ru');
import { Moment } from 'moment';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() public project: any;
  public spaceMonth: any[];
  public days: any[];
  public options: any;
  constructor(private service: GanttService) { }

  ngOnInit() {
    this.spaceMonth = this.service.setPlaceMonth();
    this.days = this.service.spaceDays;
    this.options = this.service.options ? this.service.options : {bodyCellWidth: '20px'};
    console.log('this.spaceMonth', this.spaceMonth );
  }
  public prepareDate(value: Moment) {
    return value.format('MMMM-YYYY');
  }

  public prepareDay(value) {
    return value.format('D');
  }

  public calculateWidthMonth(value) {
    return this.service.widthMonth(value);
  }
}
