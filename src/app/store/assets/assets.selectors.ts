import { createSelector } from "@ngrx/store";
import { AppState } from "../app.reducer";

const selectStore = (state: AppState) => {
  return state.assets;
};

export const selectAssets = createSelector(
  selectStore,
  (state) => state.cryptoAssets
);

export const selectIsFirstTimeVisit = createSelector(
  selectStore,
  (state) => state.isFirstTimeVisit
);

export const selectIsAssetsLoading = createSelector(
  selectStore,
  (state) => state.isLoadingAssets
);

export const selectFavouriteAssets = createSelector(
  selectStore,
  (state) => state.favoriteAssets
);