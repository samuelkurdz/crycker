import { inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import {
	catchError,
	exhaustMap,
	map,
	switchMap,
} from 'rxjs/operators';
import * as assetsActions from './assets.actions';
import { DataService } from 'src/app/data.service';


export const getAssets = createEffect(
	(
		actions$ = inject(Actions),
		dataService = inject(DataService)
	) => {
		return actions$.pipe(
			ofType(assetsActions.fetchAssets),
			switchMap(() =>
				dataService.fetchCurrenciesData().pipe(
					map((assets) => {
						console.log(assets);
						return assetsActions.cryptoAssetsLoaded({ payload: assets })
					}),
					catchError((error) =>
						// of(UsersApiActions.usersLoadedFailure({ error }))
						of(assetsActions.cryptoAssetsLoaded({ payload: [] }))
					)
				)
			)
		);
	},
	{ functional: true }
);
