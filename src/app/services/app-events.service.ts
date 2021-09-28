import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { BaseEvent } from '../events/base.event';

@Injectable({ providedIn: 'root' })
export class AppEventsService {
  private eventsDispatcher = new Subject<BaseEvent>();

  public dispatch(event: BaseEvent): void {
    this.eventsDispatcher.next(event);
  }

  public get onEvents$(): Observable<BaseEvent> {
    return this.eventsDispatcher.asObservable();
  }
}
