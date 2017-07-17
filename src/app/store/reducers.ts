import { ActionReducer, Action } from '@ngrx/store';

import { AppState, initialState } from './app-state';

export const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR';
export const SET_TEMPLATE = 'SET_TEMPLATE';
export const SET_TEMPLATE_DEFAULT = 'SET_TEMPLATE_DEFAULT';
export const MARK_AS_DIRTY = 'MARK_AS_DIRTY';
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

export function templateReducer(state: string = '', action: Action) {
  let newState = '' + state;

  switch (action.type) {
    case SET_TEMPLATE:
      newState = action.payload;
      return newState;

    case SET_TEMPLATE_DEFAULT:
      newState = action.payload;
      initialState.templateHTML = '' + action.payload;
      return newState;

    case RESET:
      newState = initialState.templateHTML;
      return newState;

    default:
      return state;
  }
}

export function dirtyReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case RESET:
      return false;

    case MARK_AS_DIRTY:
      return true;

    default:
      return state;
  }
}
