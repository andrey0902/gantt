import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  @Input() public tasks: any;
  constructor() { }

  ngOnInit() {
    console.log(this.tasks);
  }

  public getTasks() {
    return this.tasks;
  }

}
