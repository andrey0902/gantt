/**
 * Created by andrei on 13.02.2018.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';


@Injectable()
export class BarsEventService {
  public subject = new Subject();

  public get bars(): Observable<any> {
    return this.subject.asObservable();
  }

  public set bars(value) {
    this.subject.next(value);
  }
}
