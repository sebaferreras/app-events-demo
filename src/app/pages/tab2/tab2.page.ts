import { Component } from '@angular/core';
import { userSignInEvent, userSignOutEvent } from 'src/app/events';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private appEventsService: AppEventsService) {}

  public dispatchSignInEvent(): void {
    const id = Math.floor(Math.random() * 10);
    const email = `test+${id}@user.com`;

    console.log(
      `===> TAB 2: about to dispatch UserSingInEvent: ${id} - ${email}`
    );
    this.appEventsService.dispatch(userSignInEvent(id, email));
  }

  public dispatchSignOutEvent(): void {
    console.log(`===> TAB 2: about to dispatch UserSingOutEvent`);
    this.appEventsService.dispatch(userSignOutEvent());
  }
}
