import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.components.css']
})
export class HeaderComponent implements OnInit {
  @Input() public project: any;
  constructor() { }

  ngOnInit() {
  }

}
