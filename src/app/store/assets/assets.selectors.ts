import { createSelector } from "@ngrx/store";
import { AppState } from "../app.reducer";

const selectStore = (state: AppState) => {
  return state.assets;
};

export const selectCryptoAssets = createSelector(
  selectStore,
  (state) => state.currencies
);

export const selectIsFirstTimeVisit = createSelector(
  selectStore,
  (state) => state.isFirstTimeVisit
);

export const selectIsAssetsLoading = createSelector(
  selectStore,
  (state) => state.isLoadingAssets
);