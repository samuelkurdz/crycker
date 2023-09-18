import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';


import { routes } from './app.routes';
import { reducers, metaReducers } from './store/app.reducer';
import { headerInterceptor } from './interceptors/header.interceptor';
import * as assetsEffects from './store/assets/assets.effects';
import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
	providers: [
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideEffects(assetsEffects),
    provideHttpClient(withInterceptors([headerInterceptor])),
    provideAnimations()
]
};
