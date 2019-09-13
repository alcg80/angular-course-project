import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { products } from '../../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const productId: number = +next.params.productId;
    return !!productId && products.some(product => product.id === productId);
  }
}
