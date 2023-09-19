import { inject } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as assetsActions from './assets.actions';
import { DataService } from 'src/app/services/data.service';
import { selectFavouriteAssets } from './assets.selectors';
import { Store } from '@ngrx/store';


export const getAssetsEffect = createEffect(
	(
		actions$ = inject(Actions),
		_dataService = inject(DataService),
		_store = inject(Store)
	) => {
		return actions$.pipe(
			ofType(assetsActions.fetchAssets),
			concatLatestFrom(() => _store.select(selectFavouriteAssets)),
			switchMap(([action, favAssets]) =>
				_dataService.fetchCurrenciesData().pipe(
					map((assets) => {
						return assets.map((asset) => ({
							...asset,
							isFav: favAssets.some(favAsset => favAsset.asset_id === asset.asset_id)
						}))
					}),
					map((assets) => assetsActions.cryptoAssetsLoaded({ payload: assets })),
					catchError((error) => of(assetsActions.assetsLoadedFailure()))
				)
			)
		);
	},
	{ functional: true }
);
