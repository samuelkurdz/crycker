import { createAction, props } from '@ngrx/store';
import { CryptoAsset } from './assets.reducer';

export const fetchAssets = createAction(
  'FETCH_ASSETS',
);


export const cryptoAssetsLoaded = createAction(
  'ASSETS_LOADED',
  props<{ payload: CryptoAsset[] }>(),
);

export const hasVisited = createAction('VISITED');
