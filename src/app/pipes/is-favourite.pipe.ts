import { Pipe, PipeTransform, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFavouriteAssets } from '../store/assets/assets.selectors';

@Pipe({
  name: 'isFavourite',
  standalone: true
})
export class IsFavouritePipe implements PipeTransform {
	_store = inject(Store);
	favouriteAssets = this._store.selectSignal(selectFavouriteAssets);

  transform(assetId: string): boolean {
    return this.favouriteAssets().some((asset) => asset.asset_id === assetId);
  }

}
