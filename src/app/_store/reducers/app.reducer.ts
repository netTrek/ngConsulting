import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../model/app.state';
import { RouterFeatureConstEnum } from '../router-feature-const.enum';
import { RouterStateUrl } from '../model/router-state-url';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>( RouterFeatureConstEnum.name );
