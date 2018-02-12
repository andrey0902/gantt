import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { GanttService } from '../services/gantt.service';
import * as moment from 'moment';
moment.locale('ru');
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
  public itemCellWidth = 20;
  @ViewChild('item') public item;
  @Input() public areaBody;
  constructor(private service: GanttService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.spaceMonth = this.service.setPlaceMonth();
    this.days = this.service.spaceDays;
    this.options = this.service.options;

  }

  ngAfterViewInit() {
      console.log('this.item', this.item.nativeElement.getBoundingClientRect().width );
        this.service.options.cellWidth = this.item.nativeElement.getBoundingClientRect().width;
        this.cdr.detectChanges();

    this.service.options.cellWidth = this.item.nativeElement.getBoundingClientRect().width;
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
}
