import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private buyerAPIUrl = 'api/buyer'; 

  constructor(private http: HttpClient) { }
}
