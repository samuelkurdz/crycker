import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CryptoAsset } from './store/assets/assets.reducer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private http = inject(HttpClient);
	private  APIURL =  environment.APIURL;

  constructor() { }

	fetchCurrenciesData() {
		return this.http.get<CryptoAsset[]>(`${this.APIURL}/assets`)
	}
}
