import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class GanttService {
  public options;
  public spaceDays = [];
  public _diffDays: number;
  public spaceMonth = [];

  constructor() { }

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
    for (let i = 1; i <= this._diffDays + 1; i++) {
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
    console.log('array', tempArry);
    return tempArry.length  * parseInt(this.options.bodyCellWidth, 10) ;
  }
  public prepareOptionsDate() {
    // if (!this.options.start || !this.options.end) {
    //   return null;
    // }
    this.options.start = moment(this.options.start);
    this.options.end = moment(this.options.end);
    console.log('servise', this.options);
  }

}
