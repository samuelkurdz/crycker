import { createAction, props } from '@ngrx/store';
import { CryptoAsset } from './assets.reducer';

export const fetchAssets = createAction(
  'FETCH_ASSETS',
);

export const cryptoAssetsLoaded = createAction(
  'ASSETS_LOADED_SUCCESSFUL',
  props<{ payload: CryptoAsset[] }>(),
);

export const assetsLoadedFailure = createAction(
  'ASSETS_LOADED_FAILURE',
);

export const toggleAssetFavStatus = createAction(
  'TOGGLE_ASSET_FAVOURITE_STATUS',
  props<{ asset: CryptoAsset }>(),
);

export const hasVisited = createAction('VISITED');
