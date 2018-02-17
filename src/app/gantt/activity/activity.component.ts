import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() public project: any;
  @Input() public options: any;
  constructor() { }

  public get headerRow() {
    return this.options.activity.headerCol;
  }

  public get tasks() {
    return this.project.tasks;
  }

  ngOnInit() {
  }

}
