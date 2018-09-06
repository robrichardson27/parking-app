import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../models/booking';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingsUrl = 'api/bookings';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // TODO pass date to retrieve spaces available for the selectedDate
  getBookings(dayId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl).pipe(
      tap(_ => this.log(`fetched number of bookings=${_.length}`)),
      catchError(this.handleError<Booking[]>(`getBookings`, []))
    );
  }

  private log(message: string) {
    this.messageService.add(message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
