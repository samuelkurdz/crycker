import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from './data.service';
import { fetchAssets } from './store/assets/assets.actions';
import { selectCryptoAssets } from './store/assets/assets.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _store = inject(Store);
  _dataService = inject(DataService);

	hasVisited = this._store.selectSignal(selectCryptoAssets)
	

	ngOnInit(): void {
		this._store.dispatch(fetchAssets())
	}
	
}
