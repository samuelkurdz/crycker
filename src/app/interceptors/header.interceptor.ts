import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
	const authReq = req.clone({
		headers: req.headers.set("X-CoinAPI-Key", environment.coinAPIKey)
	});
	return next(authReq);
};
