export interface AppState {
  isDirty: boolean;
  templateHTML: string;
  backgroundColor: string;
}

export let initialState: AppState = {
  isDirty: false,
  templateHTML: '',
  backgroundColor: '#E07A5F'
};
