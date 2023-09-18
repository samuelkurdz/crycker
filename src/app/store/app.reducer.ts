// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {
	StoreModule,
	ActionReducer,
	MetaReducer,
	ActionReducerMap,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { assetsReducer, Assets } from './assets/assets.reducer';

export interface AppState {
	assets: Assets;
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
