import { ActionReducer, Action } from '@ngrx/store';

import { AppState, initialState } from './app-state';

export const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR';
export const RESET = 'RESET';


export function backgroundReducer(state: string = initialState.backgroundColor, action: Action) {
  let newState = '' + state;

  switch (action.type) {
    case SET_BACKGROUND_COLOR:
      newState = action.payload;
      return newState;

    case RESET:
      newState = initialState.backgroundColor;
      return newState;

    default:
      return state;
  }
}
