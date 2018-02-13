import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class GanttService {
  public options;
  public project;
  public spaceDays = [];
  public _diffDays: number;
  public spaceMonth = [];
  public areaBody;

  constructor() {
  }

  public diffDays() {
    this.options.start = moment(this.options.start.split('-'));
    this.options.end = moment(this.options.end.split('-'));
    this._diffDays = Math.abs(this.options.start.diff(this.options.end, 'days'));
    this.spaceDays.push(this.options.start);
    console.log('days', this.spaceDays);
  }

  public createSpaceDays() {
    if (this.checkData()) {
      return;
    }
    this.diffDays();
    for (let i = 1; i <= this._diffDays; i++) {
      this.spaceDays.push(moment(this.options.start).add(i, 'd'));
    }
    /*this.setPlaceMonth();*/
    // console.log('this.spaceDays', this.spaceDays);
  }

  public setPlaceMonth() {
    const tempMap = new Map();
    this.spaceDays.forEach((item) => {
      if (!tempMap.has(item.format('MM'))) {
        tempMap.set(item.format('MM'), item);
        this.spaceMonth.push(item);
      }
    });
    console.log('this.apaceMonth', this.spaceMonth);
    return this.spaceMonth;
  }

  public checkData() {
    if (!this.options.start || !this.options.end) {
      return null;
    }
  }

  public widthMonth(value) {
    const tempArry = [];
    for (let i = 0; i <= this.spaceDays.length - 1; i++) {
      // console.log('month', value.format('YYYY-MM'));
      // console.log(this.spaceDays[i].format('YYYY-MM'));
      if (value.format('YYYY-MM') === this.spaceDays[i].format('YYYY-MM')) {
        tempArry.push(1);
      }
    }
    //  console.log('tempArry.length  * this.options.cellWidth', tempArry.length  * this.options.cellWidth);
    // console.log('this.options.cellWidth', tempArry.length,  this.options.cellWidth);
    return tempArry.length * this.options.cellWidth;
  }

  public prepareOptionsDate() {
    // if (!this.options.start || !this.options.end) {
    //   return null;
    // }
    this.options.start = moment(this.options.start);
    this.options.end = moment(this.options.end);
    console.log('servise', this.options);
  }

  public getWidthCell() {
    /*.getBoundingClientRect().width*/
    const widthArea = this.areaBody.nativeElement.getBoundingClientRect().width;
    const countItem = this.spaceDays.length;
    console.log(widthArea, countItem);
    if (widthArea / countItem < 18) {
      return this.options.cellWidth = 18;
    }
    return this.options.cellWidth = widthArea / countItem;
  }

  public getStartBars(value) {
    const start = moment(value.start).format('YYYY-MM-DD');
    const index = this.spaceDays.findIndex((elem) => {
      if (elem.format('YYYY-MM-DD') === start) {
        return true;
      }
    });
    return index === -1 || 0 ? 0 : this.options.cellWidth * index;
  }

  public getWidthBars(value) {
    const start = moment(value.start);
    const end = moment(value.end);
    const diffDays = Math.abs(start.diff(end, 'days'));
    return (diffDays + 1) * this.options.cellWidth;
  }
}
