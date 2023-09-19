import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsTableComponent } from './assets-table.component';
import { provideStore } from '@ngrx/store';
import { reducers } from 'src/app/store/app.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';


const mockAssets = [
	{
		"asset_id": "BTC",
		"name": "Bitcoin",
		"type_is_crypto": 1,
		"data_start": "2010-07-17",
		"data_end": "2019-11-03",
		"data_quote_start": "2014-02-24T17:43:05.0000000Z",
		"data_quote_end": "2019-11-03T17:55:07.6724523Z",
		"data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
		"data_orderbook_end": "2019-11-03T17:55:17.8592413Z",
		"data_trade_start": "2010-07-17T23:09:17.0000000Z",
		"data_trade_end": "2019-11-03T17:55:11.8220000Z",
		"data_symbols_count": 22711,
		"volume_1hrs_usd": 102894431436.49,
		"volume_1day_usd": 2086392323256.16,
		"volume_1mth_usd": 57929168359984.54,
		"price_usd": 9166.207274778093436220194944,
		isFav: false,
	},
	{
		"asset_id": "USD",
		"name": "US Dollar",
		"type_is_crypto": 0,
		"data_start": "2010-07-17",
		"data_end": "2019-11-03",
		"data_quote_start": "2014-02-24T17:43:05.0000000Z",
		"data_quote_end": "2019-11-03T17:54:49.3807706Z",
		"data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
		"data_orderbook_end": "2019-11-03T17:55:13.1863931Z",
		"data_trade_start": "2010-07-17T23:09:17.0000000Z",
		"data_trade_end": "2019-11-03T17:55:07.7870000Z",
		"data_symbols_count": 10728,
		"volume_1hrs_usd": 9466454016.52,
		"volume_1day_usd": 221580758173.49,
		"volume_1mth_usd": 11816685174661.70,
		"price_usd": 1.0,
		isFav: true
	},
	{
		"asset_id": "JPY",
		"name": "Yen",
		"type_is_crypto": 0,
		"data_quote_start": "2014-11-15T00:00:00.000Z",
		"data_quote_end": "2023-09-17T00:00:00.000Z",
		"data_orderbook_start": "2014-11-14T01:42:12.557Z",
		"data_orderbook_end": "2023-07-07T00:00:00.000Z",
		"data_trade_start": "2011-08-27T00:00:00.000Z",
		"data_trade_end": "2023-09-17T00:00:00.000Z",
		"data_symbols_count": 655,
		"volume_1hrs_usd": 4951855.76,
		"volume_1day_usd": 181083999.24,
		"volume_1mth_usd": 0,
		"price_usd": 0.0067659191681043954,
		"data_start": "2011-08-27",
		"data_end": "2023-09-17",
		"isFav": true
	},
	{
		"asset_id": "CNY",
		"name": "Yuan Renminbi",
		"type_is_crypto": 0,
		"data_quote_start": "2015-02-12T00:00:00.000Z",
		"data_quote_end": "2023-09-15T00:00:00.000Z",
		"data_orderbook_start": "2015-02-11T16:50:54.613Z",
		"data_orderbook_end": "2020-08-05T14:33:23.527Z",
		"data_trade_start": "2011-06-13T00:00:00.000Z",
		"data_trade_end": "2022-06-10T14:00:00.000Z",
		"data_symbols_count": 430,
		"volume_1hrs_usd": 0,
		"volume_1day_usd": 0,
		"volume_1mth_usd": 0,
		"price_usd": 0.1375395640751165,
		"data_start": "2011-06-13",
		"data_end": "2023-09-15",
		"isFav": true
	},
]

describe('AssetsTableComponent', () => {
	let component: AssetsTableComponent;
	let fixture: ComponentFixture<AssetsTableComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [AssetsTableComponent],
			providers: [
				provideStore(reducers),
				provideAnimations()
			]
		});
		fixture = TestBed.createComponent(AssetsTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should be in loading state', () => {
		component.isTableDataLoading = true;
		fixture.detectChanges();
		const loadingSkeleton = fixture.debugElement.nativeElement.querySelector(
			'app-skeleton-item'
		);
		expect(loadingSkeleton).toBeTruthy();
	});

	it('should have filled table row', () => {
		component.tableAssets = mockAssets;
		fixture.detectChanges();
		component.ngOnChanges()
		fixture.detectChanges();
		const tableRows = fixture.debugElement.nativeElement.querySelectorAll('.mdc-data-table__row');
		expect(tableRows.length).toEqual(4);
	});
});
