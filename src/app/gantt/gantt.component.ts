import {
  Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output,
  ViewChild
} from '@angular/core';
import { GanttService } from './services/gantt.service';

import { BarsEventService } from './services/bars-event.servise';
import { BodyCellEventService } from './services/body-cell-event.servise';
import { Subscription } from 'rxjs/Subscription';
import { OptionsConfig, Project } from './services/interface';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss']
})
export class GanttComponent implements OnInit, OnChanges, OnDestroy {
  private _options: OptionsConfig;
  private _project: Project;
  private barsSubscription: Subscription;
  private bodyCellSubscription: Subscription;
  @Output() public barsEvent: EventEmitter<any> = new EventEmitter();
  @Output() public cellEvent: EventEmitter<any> = new EventEmitter();

  @Input()
  public set options(value: OptionsConfig) {
    this._options = value;
  }

  @Input()
  public set project(value: Project) {
    this._project = value;
  }
  @ViewChild('areaBody') public areaBody;
  constructor(
    private service: GanttService,
    private barsService: BarsEventService,
    private cellService: BodyCellEventService
  ) {}

  ngOnInit() {
    this.initialize();
    this.barsSubscription = this.barsService.bars.subscribe((value) => {
      this.barsEvent.emit(value);
    });
    this.bodyCellSubscription = this.cellService.cell.subscribe((value) => {
      this.cellEvent.emit(value);
    });
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
    this.service.setOptions(this._options);
    this.service.setProject(this._project);
    this.service.areaBody = this.areaBody;
    this.service.createSpaceDays();
  }

  public get project() {
    return this._project;
  }

  public get options() {
    return this._options;
  }

  ngOnDestroy() {
    this.barsSubscription.unsubscribe();
    this.bodyCellSubscription.unsubscribe();
  }
}
