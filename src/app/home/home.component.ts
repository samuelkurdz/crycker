import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsTableComponent } from '../assets-table/assets-table.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, AssetsTableComponent],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
