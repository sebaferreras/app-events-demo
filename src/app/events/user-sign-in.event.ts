import { BaseEvent } from './base.event';

export const USER_SIGN_IN = 'USER_SIGN_IN';

// Event definition
export interface UserSignInEvent {
  type: typeof USER_SIGN_IN;
  payload: {
    id: number;
    email: string;
  };
}

// Event creator function
export const userSignInEvent = (
  id: number,
  email: string
): UserSignInEvent => ({
  type: USER_SIGN_IN,
  payload: { id, email },
});

// Event filtering function
export const isUserSignInEvent = (event: BaseEvent): event is UserSignInEvent =>
  event.type === USER_SIGN_IN;
