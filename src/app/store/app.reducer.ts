import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { assetsReducer, AssetState } from './assets/assets.reducer';

export interface AppState {
	assets: AssetState;
}

export const reducers: ActionReducerMap<AppState> = {
	assets: assetsReducer,
};

function localStorageSyncReducer(
	reducer: ActionReducer<AppState>,
): ActionReducer<AppState> {
	return localStorageSync({
		keys: [{ assets: ['isFirstTimeVisit', 'favoriteAssets'] }],
		rehydrate: true,
	})(reducer);
}

export const metaReducers: Array<MetaReducer<AppState, any>> = [
	localStorageSyncReducer,
];
