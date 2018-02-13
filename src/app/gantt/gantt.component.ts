import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { GanttService } from './services/gantt.service';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss']
})
export class GanttComponent implements OnInit, OnChanges {
  private _options: any;
  private _project: any;
  @Input() public set options(value) {
    this._options = value;
  }
  @Input() public set project(value) {
    this._project = value;
  }
  @ViewChild('areaBody') public areaBody;
  constructor(private service: GanttService) {
  }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {
  }

  public addTask(value) {
    this.service.addTask(value);
  }

  public addSubTask(value) {
    this.service.addSubTask(value);
  }

  public initialize() {
    this.service.options = this._options;
    this.service.project = this._project;
    this.service.areaBody = this.areaBody;
    this.service.createSpaceDays();
  }

  public get project() {
    return this._project;
  }

  public get options() {
    return this._options;
  }
}
