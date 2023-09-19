import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';

import { headerInterceptor } from './header.interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('headerInterceptor', () => {
	let client: HttpClient
	let controller: HttpTestingController
	const interceptor: HttpInterceptorFn = (req, next) =>
		TestBed.runInInjectionContext(() => headerInterceptor(req, next));

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				provideHttpClient(withInterceptors([headerInterceptor])),
				provideHttpClientTesting(),
			]
		});
		client = TestBed.inject(HttpClient)
		controller = TestBed.inject(HttpTestingController)
	});

	it('should be created', () => {
		expect(interceptor).toBeTruthy();
	});

	it('should contain required header API', (done) => {
		client.get('https://demo.angulararchitects.io/api/flight?from=Paris&to=London', {
		}).subscribe(response => {
			done()
		})

		const request = controller.expectOne('https://demo.angulararchitects.io/api/flight?from=Paris&to=London');
		const reqHeader = request.request.headers.get('X-CoinAPI-Key')
		expect(reqHeader).toBeTruthy();
		request.flush({});
	})
});
