import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HomeComponent } from './home.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Action } from '@ngrx/store';
import { Subject } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';


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
		isFav: false
	}
]


describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let actions$ = new Subject<Action>();
	let store: MockStore;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HomeComponent],
			providers: [
				provideHttpClient(),
				provideHttpClientTesting(),
				provideRouter([]),
				provideAnimations(),

				provideMockStore({
					initialState: {
						assets: {
							cryptoAssets: [],
							isFirstTimeVisit: true,
							isLoadingAssets: false,
							favoriteAssets: [],
						}
					},
				}),
				provideMockActions(() => actions$),
			]
		});
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		store = TestBed.inject(MockStore);
		fixture.detectChanges();
	});

	it('should create component', () => {
		expect(component).toBeTruthy();
	});

	it('should have empty assets', () => {
		expect(component.assets().length).toBe(0);
	});

	it('should be in loading state', () => {
		store.setState({
			assets: {
				cryptoAssets: [],
				isFirstTimeVisit: true,
				isLoadingAssets: true,
				favoriteAssets: [],
			}
    });
		fixture.detectChanges();
		const loadingSkeleton = fixture.debugElement.nativeElement.querySelector(
      'app-skeleton-item'
    );
		expect(loadingSkeleton).toBeTruthy();
	});

	it('should load assets', () => {
		store.setState({
			assets: {
				cryptoAssets: mockAssets,
				isFirstTimeVisit: true,
				isLoadingAssets: false,
				favoriteAssets: [],
			}
    });
		fixture.detectChanges();
		expect(component.assets().length).toBe(2);
	});

	it('should display table ', () => {
		store.setState({
			assets: {
				cryptoAssets: mockAssets,
				isFirstTimeVisit: true,
				isLoadingAssets: false,
				favoriteAssets: [],
			}
    });
		fixture.detectChanges();
		
		const tableRows = fixture.debugElement.nativeElement.querySelectorAll('.mdc-data-table__row');
		expect(tableRows.length).toEqual(2);
	});

	// it('should filter assets by the input search field', async () => {
	// 	store.setState({
	// 		assets: {
	// 			cryptoAssets: mockAssets,
	// 			isFirstTimeVisit: true,
	// 			isLoadingAssets: false,
	// 			favoriteAssets: [],
	// 		}
  //   });

  //   fixture.detectChanges();
  //   const inputElement = fixture.debugElement.nativeElement.querySelector(
  //     '#filter'
  //   );
  //   inputElement.value = 'bitcoin';
  //   inputElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();

	// 	const tableRows = fixture.debugElement.nativeElement.querySelectorAll('.mdc-data-table__row');
	// 	expect(tableRows.length).toEqual(1);
  // });
});
