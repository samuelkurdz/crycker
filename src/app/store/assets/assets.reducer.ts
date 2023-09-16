import { createReducer, on } from '@ngrx/store';
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
	price_usd?: string;
}

export interface Assets {
	favorites: string[];
	currencies: CryptoAsset[];
	isFirstTimeVisit: boolean;
	isLoadingAssets: boolean;
}


const initialState: Assets = {
	favorites: [],
	currencies: [],
	isFirstTimeVisit: true,
	isLoadingAssets: false,
};

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
			currencies: payload,
			isLoadingAssets: false
		};
	}),

	on(assetsActions.hasVisited, (state) => {
		return {
			...state,
			isFirstTimeVisit: false,
		};
	}),
);
