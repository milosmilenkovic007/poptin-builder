export interface AppState {
  currentElement: HTMLElement;
  backgroundColor: string;
}

export const initialState: AppState = {
  currentElement: null,
  backgroundColor: String('#E07A5F')
};
