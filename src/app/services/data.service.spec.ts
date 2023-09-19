import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from '../interceptors/header.interceptor';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
			providers: [
				provideHttpClient(withInterceptors([headerInterceptor])),
			]
		});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('should fetch assets', (done) => {
    service.fetchCurrenciesData().subscribe({
      next: (assets) => {
        expect(assets.length).toEqual(18255);
        done();
      },
      error: done.fail,
    });
  });
});
