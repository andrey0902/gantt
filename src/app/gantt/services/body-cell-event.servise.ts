/**
 * Created by andrei on 13.02.2018.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BodyCellEventService {
  public subject = new Subject();

  public get cell(): Observable<any> {
    return this.subject.asObservable();
  }

  public set cell(value) {
    this.subject.next(value);
  }
}
