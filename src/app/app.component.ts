import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public options = {
    activity: {
      headerCol: [
        {
        name: 'name',
        width: '50%'
        },
        {
         name: 'id',
         width: '50%'
        }
      ],
      width: '20%',
    },
    body: {
      width: '80%'
    },
    start: '2017-00-01',
    end: '2017-04-01',
    bodyCellWidth: '20px'
  };

  public project = {
    id: 5,
    name: 'New Gannt',
    startDate: '2018-02-13',
    tasks: [
      {
        'id': 1,
        'treePath': 'parent 1',
        'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
        'name': 'parent 1',
        'resource': 'res1'
      },
      {
        'id': 2,
        'treePath': 'parent 2 lajsf a;dksjf a;kkjf ;alskdjkf',
        'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
        'name': 'parent 2 lajsf a;dksjf a;kkjf ;alskdjkf',
        'resource': 'res1'
      },
      {
        'id': 3,
        'treePath': 'parent 1',
        'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
        'name': 'parent 3',
        'resource': 'res1'
      }
    ]
  };
}
