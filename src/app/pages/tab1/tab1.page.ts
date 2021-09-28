import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isUserSignInEvent, isUserSignOutEvent } from 'src/app/events';
import { filterEvent } from 'src/app/operators';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  public id: number;
  public email: string;
  public isSignedIn: boolean;

  private unsubscribe$ = new Subject<void>();

  constructor(private appEventsService: AppEventsService) {}

  ngOnInit() {
    this.appEventsService.onEvents$
      .pipe(filterEvent(isUserSignInEvent), takeUntil(this.unsubscribe$))
      .subscribe(({ payload }) => {
        const { id, email } = payload;

        console.log(`===> TAB 1: received UserSingInEvent: ${id} - ${email}`);

        this.id = id;
        this.email = email;
        this.isSignedIn = true;
      });

    this.appEventsService.onEvents$
      .pipe(filterEvent(isUserSignOutEvent), takeUntil(this.unsubscribe$))
      .subscribe(() => {
        console.log(`===> TAB 1: received UserSingOutEvent`);

        this.id = null;
        this.email = null;
        this.isSignedIn = false;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
