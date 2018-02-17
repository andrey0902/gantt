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

  public setOptions(options): void {
    for (const optionsKey in options) {
      if (options.hasOwnProperty(optionsKey)) {
        this.options[optionsKey] = options[optionsKey];
      }
    }
  }

  public setProject(project) {
    this.project = project;
    this.prepareCurrentDay();
  }

  public prepareCurrentDay() {
    if (this.project.currentDate) {
      this.project.currentDate = moment(this.project.currentDate.split('-')).format('YYYY-MM-DD');
    }
  }

  public diffDays(): void {
    this.project.start = moment(this.project.start.split('-'));
    this.project.end = moment(this.project.end.split('-'));
    this._diffDays = Math.abs(this.project.start.diff(this.project.end, 'days'));
    this.spaceDays.push(this.project.start);
  }

  public createSpaceDays(): void {
    if (this.checkData()) {
      return;
    }
    this.diffDays();
    for (let i = 1; i <= this._diffDays; i++) {
      this.spaceDays.push(moment(this.project.start).add(i, 'd'));
    }
  }

  public setPlaceMonth() {
    const tempMap = new Map();
    this.spaceDays.forEach((item) => {
      if (!tempMap.has(item.format('MM'))) {
        tempMap.set(item.format('MM'), item);
        this.spaceMonth.push(item);
      }
    });

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

  public getWidthCell() {
    const widthArea = this.areaBody.nativeElement.getBoundingClientRect().width;
    const countItem = this.spaceDays.length;
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
    const endGantt = this.project.end;
    const start = moment(value.start);
    let end = moment(value.end);
    if (end.valueOf() > endGantt.valueOf()) {
      end = endGantt;
    }
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

  public isWeekend(day) {
    const numDay = day.days();
    return (numDay === 5 || numDay === 6);
  }

  public isCurrentDay(day) {
    if (this.project.currentDate) {
      return (day.format('YYYY-MM-DD') === this.project.currentDate) ;
    }
  }
}
