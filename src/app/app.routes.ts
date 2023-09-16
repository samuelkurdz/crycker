import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./home/home.component').then((com) => com.HomeComponent),
	},
	{
		path: 'favourites',
		loadComponent: () =>
			import('./favourites/favourites.component').then((com) => com.FavouritesComponent),
	}
];
