import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./home/home.component')
	},
	{
		path: 'favourites',
		loadComponent: () =>
			import('./favourites/favourites.component')
	}
];
