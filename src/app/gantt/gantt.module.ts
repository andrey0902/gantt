import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttService } from './services/gantt.service';

import { GanttComponent } from './gantt.component';
import { HeaderComponent } from './header/header.component';
import { ActivityComponent } from './activity/activity.component';
import { ItemComponent } from './activity/item/item.component';
import { BodyComponent } from './body/body.component';
import { BarsComponent } from './bars/bars.component';
import { BarsItemComponent } from './bars/bars-item/bars-item.component';
import { MomentModule } from 'angular2-moment/moment.module';
import { BarsEventService } from './services/bars-event.servise';
import { GanttCellClickDirective } from './directives/gantt-cell-click.directive';
import { BodyCellEventService } from './services/body-cell-event.servise';

@NgModule({
  imports: [
    CommonModule,
    MomentModule
  ],
  exports: [
    GanttComponent,
    HeaderComponent,
    ActivityComponent,
    ItemComponent,
    BodyComponent,
    BarsComponent,
    BarsItemComponent
  ],
  declarations: [
    GanttComponent,
    HeaderComponent,
    ActivityComponent,
    ItemComponent,
    BodyComponent,
    BarsComponent,
    BarsItemComponent,
    GanttCellClickDirective
  ],
  providers: [
    GanttService,
    BarsEventService,
    BodyCellEventService
  ]
})
export class GanttModule { }
