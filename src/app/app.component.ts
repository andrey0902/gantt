import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('gantt') public gantt;
  title = 'app';

  public options = {
    locale: 'ru',
    activity: {
      headerCol: [
        {
        name: 'name',
     /*   width: '50%'*/
        },
/*        {
         name: 'id',
         width: '50%'
        }*/
      ],
      width: '20%',
    },
    body: {
      width: '80%'
    },
    showProgress: true,
    showTooltip: true,
    typeTooltip: 'name',
    showCurrentDay: true,
  };

  public project = {
    id: 5,
/*    name: 'New Gannt',
    startDate: '2018-02-13',*/
    start: '2017-00-01',
    end: '2017-02-01',
    currentDate: '2017-00-10',
    tasks: [
      {
        'id': 1,
        'treePath': 'parent 1',
        'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
        'name': 'parent 1',
        'resource': 'res1',
        subTasks: [
          {
            'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'treePath': 'parent 1',
            'parentId': '1',
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-01',
            'end': '2017-01-02',
            'percentComplete': 100,
            'status': 'Completed'
          },
          {
            'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'treePath': 'parent 1',
            'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-012',
            'end': '2017-01-16',
            'percentComplete': 50,
            'status': 'pending'
          }
        ]
      },
      {
        'id': 2,
        'treePath': 'parent 2 lajsf a;dksjf a;kkjf ;alskdjkf',
        'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
        'name': 'parent 2 lajsf a;dksjf a;kkjf ;alskdjkf',
        'resource': 'res1',
        subTasks: [
          {
            'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'treePath': 'parent 1',
            'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-22',
            'end': '2017-01-23',
            'percentComplete': 40,
            'status': 'error'
          },
          {
            'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'treePath': 'parent 1',
            'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-13',
            'end': '2017-01-14',
            'percentComplete': 30,
            'status': 'progress'
          }
        ]
      },
      {
        'id': 3,
        'treePath': 'parent 1',
        'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
        'name': 'parent 3',
        'resource': 'res1',
        subTasks: [
          {
            'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'treePath': 'parent 1',
            'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-01',
            'end': '2017-01-03',
            'percentComplete': 10,
            'status': 'Completed'
          },
          {
            'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'treePath': 'parent 1',
            'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-05',
            'end': '2017-01-08',
            'percentComplete': 23,
            'status': 'Completed'
          }
        ]
      }
    ]
  };

  public setNew() {
   const task =  {
          'id': 44,
          'treePath': 'parent 1',
          'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
          'name': 'new task',
          'resource': 'res1',
          subTasks: [
            {
              'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
              'treePath': 'parent 1',
              'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
              'name': 'parent 1',
              'resource': 'res1',
              'start': '2017-02-08',
              'end': '2017-02-13',
              'percentComplete': 28,
              'status': 'Completed'
            },
            {
              'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
              'treePath': 'parent 1',
              'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
              'name': 'parent 1',
              'resource': 'res1',
              'start': '2017-01-12',
              'end': '2017-01-16',
              'percentComplete': 66,
              'status': 'Completed'
            }
          ]
        };
    this.gantt.addTask(task);
  }

  public addSubTask() {
    const subTask =             {
      'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
      'treePath': 'parent 1',
      'parentId': 1,
      'name': 'parent 1',
      'resource': 'res1',
      'start': '2017-01-22',
      'end': '2017-01-25',
      'percentComplete': 19,
      'status': 'Completed'
    };

    this.gantt.addSubTask(subTask);
  }
  public onBarsClick(event) {
    console.log('event bars', event);
  }

  public onCellClick(event) {
    console.log('event onCellClick', event);
  }
}
