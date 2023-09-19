import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsTableComponent } from '../components/assets-table/assets-table.component';
import { Store } from '@ngrx/store';
import { selectFavouriteAssets } from '../store/assets/assets.selectors';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule, AssetsTableComponent],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
	private _store = inject(Store);
	favAssets = this._store.selectSignal(selectFavouriteAssets);
}
