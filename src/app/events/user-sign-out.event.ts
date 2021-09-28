import { BaseEvent } from './base.event';

const USER_SIGN_OUT = 'USER_SIGN_OUT';

// Event definition
export interface UserSignOutEvent {
  type: typeof USER_SIGN_OUT;
}

// Event creator function
export const userSignOutEvent = (): UserSignOutEvent => ({
  type: USER_SIGN_OUT,
});

// Event filtering function
export const isUserSignOutEvent = (
  event: BaseEvent
): event is UserSignOutEvent => event.type === USER_SIGN_OUT;
