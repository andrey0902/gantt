import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { GanttService } from '../services/gantt.service';
import * as moment from 'moment';

import { Moment } from 'moment';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, AfterViewInit {
  @Input() public project: any;
  public spaceMonth: any[];
  public days: any[];
  public options: any;
  public locale = 'en';
  @Input() public areaBody;
  constructor(private service: GanttService,
              private cdr: ChangeDetectorRef) {

    this.days = this.service.spaceDays;
    this.options = this.service.options;
  }

  ngOnInit() {
  this.initialize();
  }

  public initialize() {
    this.setLocale();
    this.spaceMonth = this.service.setPlaceMonth();
  }

  public setLocale() {
    if (this.service.options.locale) {
     this.locale = this.service.options.locale;
     this.cdr.detectChanges();
    }
  }

  ngAfterViewInit() {
/*      console.log('this.item', this.item.nativeElement.getBoundingClientRect().width );
        this.service.options.cellWidth = this.item.nativeElement.getBoundingClientRect().width;
        this.cdr.detectChanges();

    this.service.options.cellWidth = this.item.nativeElement.getBoundingClientRect().width;*/
    this.cdr.detectChanges();
  }

  public getCellwidth() {
    return this.service.getWidthCell();
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

  public noResize(event) {
    this.cdr.detectChanges();
  }

  public isWeekend(day) {
    return this.service.isWeekend(day);
  }

  public isCurrendDay(day) {
    if (this.options.showCurrentDay) {
     return this.service.isCurrentDay(day);
    }
    return false;
  }
}
