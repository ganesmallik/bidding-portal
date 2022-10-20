import { Injectable } from '@angular/core';
import {Product }from './Product' ;
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BidDetail } from './BidDetail';
import { environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private sellerAPIUrl = environment.sellerAPIBaseUrl+'api/seller'; 

  private showBidsUrl = this.sellerAPIUrl+"/show-bids"; 

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.sellerAPIUrl)
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  showBids(productId: string): Observable<BidDetail> {
    return this.http.get<BidDetail>(this.showBidsUrl+'/'+productId)
    .pipe(
      catchError(this.handleError<BidDetail>('showBids', undefined))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      return of(result as T);
    };
  }

}
