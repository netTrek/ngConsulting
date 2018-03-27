import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router-state-url.interface';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}
