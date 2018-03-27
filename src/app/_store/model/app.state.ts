import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router-state-url';

/**
 * File created by suenlue on 27.03.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}
