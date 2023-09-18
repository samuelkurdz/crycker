import { AfterViewInit, Component, ViewChild, inject, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IsFavouritePipe } from '../../pipes/is-favourite.pipe';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SkeletonItemComponent } from '../skeleton-item/skeleton-item.component';

import { CryptoAsset } from '../../store/assets/assets.reducer';
import { toggleAssetFavStatus } from '../../store/assets/assets.actions';

@Component({
	selector: 'app-assets-table',
	standalone: true,
	imports: [CommonModule, SkeletonItemComponent, MatTableModule, MatPaginatorModule, IsFavouritePipe, ReactiveFormsModule],
	templateUrl: './assets-table.component.html',
	styleUrls: ['./assets-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetsTableComponent implements OnChanges, AfterViewInit {

	@Input() tableAssets: CryptoAsset[] = [];
	@Input() isTableDataLoading = false;
	@ViewChild(MatPaginator) _paginator!: MatPaginator | null;

	_store = inject(Store);
	dataSource = new MatTableDataSource(this.tableAssets);
	displayedColumns = ['fav', 'name', 'volume_1hrs_usd', 'volume_1day_usd', 'volume_1mth_usd', 'price_usd'];

	ngOnChanges(changes: SimpleChanges): void {
		this.handlePagination();
	}

	ngAfterViewInit() {
		this.handlePagination();
	}

	handlePagination() {
		if (!this._paginator) return;
		const startIndex = this._paginator.pageSize * this._paginator.pageIndex;
		const endIndex = this._paginator.pageSize * (this._paginator.pageIndex + 1);
		this.dataSource.data = this.tableAssets.slice(startIndex, endIndex);
	}

	toggleFavourite(asset: CryptoAsset) {
		this._store.dispatch(toggleAssetFavStatus({ asset }))
	}

}
