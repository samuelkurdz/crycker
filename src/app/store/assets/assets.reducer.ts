import { createFeature, createReducer, on } from '@ngrx/store';
import * as assetsActions from './assets.actions';

export interface CryptoAsset {
	asset_id: string;
	name: string;
	type_is_crypto: number;
	volume_1day_usd: number;
	volume_1hrs_usd: number;
	volume_1mth_usd: number;
	data_symbols_count: number;
	data_end?: string;
	data_orderbook_end?: string;
	data_orderbook_start?: string;
	data_quote_end?: string;
	data_quote_start?: string;
	data_start?: string;
	data_trade_end?: string;
	data_trade_start?: string;
	id_icon?: string;
	price_usd?: number;
	isFav?: boolean
}

export interface Assets {
	cryptoAssets: CryptoAsset[];
	favoriteAssets: CryptoAsset[];
	isFirstTimeVisit: boolean;
	isLoadingAssets: boolean;
}


const initialState: Assets = {
	cryptoAssets: [],
	isFirstTimeVisit: true,
	isLoadingAssets: false,
	favoriteAssets: [],
};

// export const assetsReducer = createFeature({
// 	name: 'assets',
// 	reducer: createReducer(
// 		initialState,

// 		on(assetsActions.fetchAssets, (state) => {
// 			return {
// 				...state,
// 				isLoadingAssets: true
// 			};
// 		}),

// 		on(assetsActions.cryptoAssetsLoaded, (state, { payload }) => {
// 			return {
// 				...state,
// 				cryptoAssets: payload,
// 				isLoadingAssets: false
// 			};
// 		}),

// 		on(assetsActions.assetsLoadedFailure, (state) => {
// 			return {
// 				...state,
// 				isLoadingAssets: false
// 			};
// 		}),

// 		on(assetsActions.toggleAssetFavStatus, (state, { asset }) => {
// 			return {
// 				...state,
// 				favoriteAssets: state.favoriteAssets.some((queryAsset) => queryAsset.asset_id === asset.asset_id) ?
// 					state.favoriteAssets.filter(el => el.asset_id !== asset.asset_id) :
// 					[...state.favoriteAssets, { ...asset, isFav: true }],
// 				cryptoAssets: state.cryptoAssets.map((cryAsset) => (
// 					cryAsset.asset_id === asset.asset_id ?
// 						{ ...cryAsset, isFav: !cryAsset.isFav } :
// 						cryAsset
// 				))
// 			};
// 		}),

// 		on(assetsActions.hasVisited, (state) => {
// 			return {
// 				...state,
// 				isFirstTimeVisit: false,
// 			};
// 		}),
// 	)

// })


export const assetsReducer = createReducer(
	initialState,

	on(assetsActions.fetchAssets, (state) => {
		return {
			...state,
			isLoadingAssets: true
		};
	}),

	on(assetsActions.cryptoAssetsLoaded, (state, { payload }) => {
		return {
			...state,
			cryptoAssets: payload,
			isLoadingAssets: false
		};
	}),

	on(assetsActions.assetsLoadedFailure, (state) => {
		return {
			...state,
			isLoadingAssets: false
		};
	}),

	on(assetsActions.toggleAssetFavStatus, (state, { asset }) => {
		return {
			...state,
			favoriteAssets: state.favoriteAssets.some((queryAsset) => queryAsset.asset_id === asset.asset_id) ?
				state.favoriteAssets.filter(el => el.asset_id !== asset.asset_id) :
				[...state.favoriteAssets, { ...asset, isFav: true }],
			cryptoAssets: state.cryptoAssets.map((cryAsset) => (
				cryAsset.asset_id === asset.asset_id ?
					{ ...cryAsset, isFav: !cryAsset.isFav } :
					cryAsset
			))
		};
	}),

	on(assetsActions.hasVisited, (state) => {
		return {
			...state,
			isFirstTimeVisit: false,
		};
	}),
);
