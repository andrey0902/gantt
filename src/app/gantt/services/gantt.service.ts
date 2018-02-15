import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { OptionsConfig } from './options.config';

@Injectable()
export class GanttService {
  public options;
  public project;
  public spaceDays = [];
  public _diffDays: number;
  public spaceMonth = [];
  public areaBody;
  public cellWidth = 18;

  constructor() {
    this.createOption();
  }

  public createOption() {
    this.options = new OptionsConfig();
  }

  public setOptions(options) {
    console.log('options', options);
    console.log('this.options', this.options);
    for (const optionsKey in options) {
      if (options.hasOwnProperty(optionsKey)) {
        console.log('optionsKey', optionsKey);
        this.options[optionsKey] = options[optionsKey];
      }
    }
    console.log('this.options', this.options);
  }

  public diffDays() {
    this.project.start = moment(this.project.start.split('-'));
    this.project.end = moment(this.project.end.split('-'));
    this._diffDays = Math.abs(this.project.start.diff(this.project.end, 'days'));
    this.spaceDays.push(this.project.start);
  //  console.log('days', this.spaceDays);
  }

  public createSpaceDays() {
    if (this.checkData()) {
      return;
    }
    this.diffDays();
    for (let i = 1; i <= this._diffDays; i++) {
      this.spaceDays.push(moment(this.project.start).add(i, 'd'));
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
   // console.log('this.apaceMonth', this.spaceMonth);
    return this.spaceMonth;
  }

  public checkData() {
    if (!this.project.start || !this.project.end) {
      return null;
    }
  }

  public widthMonth(value) {
    const tempArry = [];
    for (let i = 0; i <= this.spaceDays.length - 1; i++) {
      if (value.format('YYYY-MM') === this.spaceDays[i].format('YYYY-MM')) {
        tempArry.push(1);
      }
    }
    return tempArry.length * this.cellWidth;
  }

  public prepareOptionsDate() {
    // if (!this.options.start || !this.options.end) {
    //   return null;
    // }
    this.options.start = moment(this.options.start);
    this.options.end = moment(this.options.end);
  //  console.log('servise', this.options);
  }

  public getWidthCell() {
    /*.getBoundingClientRect().width*/
    const widthArea = this.areaBody.nativeElement.getBoundingClientRect().width;
    const countItem = this.spaceDays.length;
   // console.log(widthArea, countItem);
    if (widthArea / countItem < 18) {
      return this.cellWidth = 18;
    }
    return this.cellWidth = widthArea / countItem;
  }

  public getStartBars(value) {
    const start = moment(value.start).format('YYYY-MM-DD');
    const startGrafic = this.project.start.valueOf();

    // user if start bars before start gantt chart

    if (start.valueOf() < startGrafic) {
      return 0;
    }

    const index = this.spaceDays.findIndex((elem) => {
      return  elem.format('YYYY-MM-DD') === start;
    });
    /* used for if index = -1 then show bars out of the gantt chart
    * else calculate width offset
    * */
    return index === -1
      ? -1000
     : this.cellWidth * index;
  }

  public getWidthBars(value) {
    const start = moment(value.start);
    const end = moment(value.end);
    const diffDays = Math.abs(start.diff(end, 'days'));
    return (diffDays + 1) * this.cellWidth;
  }

  public addTask(value) {
    this.project.tasks.push(value);
  }

  public addSubTask(subTask) {
    const tempTask = this.project.tasks.find((task) => {
      return +task.id === +subTask.parentId;
    });

    if (tempTask && tempTask.subTasks) {
      tempTask.subTasks.push(subTask);
    }
  }
}
