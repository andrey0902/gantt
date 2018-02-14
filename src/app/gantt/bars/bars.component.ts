import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarsComponent implements OnInit {
  @Input() public tasks: any;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.tasks);
  }

  public getTasks() {
    return this.tasks;
  }

}
