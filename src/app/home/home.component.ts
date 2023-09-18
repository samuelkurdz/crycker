import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { concatLatestFrom } from '@ngrx/effects';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil, map, Subject } from 'rxjs';
import { CryptoAsset } from '../store/assets/assets.reducer';
import { selectAssets, selectIsAssetsLoading } from '../store/assets/assets.selectors';
import { AssetsTableComponent } from '../components/assets-table/assets-table.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, AssetsTableComponent, ReactiveFormsModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export default class HomeComponent implements OnInit, OnDestroy {
	_store = inject(Store);
	assets = this._store.selectSignal(selectAssets);
	private readonly onDestroyRef$ = new Subject<void>();
	isAssetsLoading = this._store.selectSignal(selectIsAssetsLoading);


	filterInputControl: FormControl<string> = new FormControl();
	displayedColumns = ['fav', 'name', 'volume_1hrs_usd', 'volume_1day_usd', 'volume_1mth_usd', 'price_usd'];


	ngOnInit(): void {
		this.filterInputControl.valueChanges
			.pipe(
				debounceTime(2000),
				distinctUntilChanged(),
				concatLatestFrom(() => this._store.select(selectAssets)),
				takeUntil(this.onDestroyRef$),
				map(([filterValue, baseAssets]) => {
					return filterValue ? baseAssets.filter((asset) => {
						const assetFilterKey = this.displayedColumns
							.map((column) => asset[column as keyof CryptoAsset])
							.filter(Boolean)
							.join('');
						return assetFilterKey
							.toLocaleLowerCase()
							.includes(filterValue.toLocaleLowerCase())
					}) : baseAssets
				}),
				map((filteredAssets) => {
					this.assets = signal(filteredAssets)
				})
			).subscribe()
	}

	ngOnDestroy(): void {
		this.onDestroyRef$.next();
		this.onDestroyRef$.complete();
	}

}
