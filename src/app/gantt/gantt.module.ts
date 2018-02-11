import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttService } from './services/gantt.service';

import { GanttComponent } from './gantt.component';
import { HeaderComponent } from './header/header.component';
import { ActivityComponent } from './activity/activity.component';
import { ItemComponent } from './activity/item/item.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GanttComponent,
    HeaderComponent,
    ActivityComponent,
    ItemComponent,
    BodyComponent,
  ],
  declarations: [
    GanttComponent,
    HeaderComponent,
    ActivityComponent,
    ItemComponent,
    BodyComponent
  ],
  providers: [
    GanttService
  ]
})
export class GanttModule { }
