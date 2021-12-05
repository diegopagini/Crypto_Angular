import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { isCoinLoaded } from '../store/selectors/coins.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(isCoinLoaded).pipe(
      tap((isLoaded) => {
        if (isLoaded) {
          return true;
        } else {
          this.router.navigate(['/home']);
          return false;
        }
      }),
      take(1)
    );
  }
}
