import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../../models/day';
import { Space } from '../../models/space';
import { Booking } from '../../models/booking';
import { SpaceService } from '../../services/space.service';
import { BookingService } from '../../services/booking.service';
import { map, filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  private _day;

  @Input()
    set day(day: Day) {
    this._day = (day);
  }

  spaces: Space[];

  constructor(
    private spaceService: SpaceService,
    private bookingService: BookingService
  ) { }

  /**
  * Gets all the car park spaces.
  */
  getSpaces(): void {
    this.spaceService.getSpaces()
      .subscribe(spaces => this.spaces = spaces);
  }

  /**
  * Makes call to Booking Service to retrive Observable of bookings
  * for the current day.
  */
  getBookings(dayId: number): Observable<Booking>[] {
    return this.bookingService.getBookings(dayId);
  }

  /**
  * Updates the spaces array to contain booked spaces.
  */
  updateSpaces(bookings: Booking[]): void {
    if (bookings !== undefined) {
      this.spaces.forEach(space => {
          const array = bookings.filter( b => b.spaceId === space.id);
          if (array[0] !== undefined) {
            space.available = false;
          } else {
            space.available = true;
          }
      });
    }
  }

  ngOnInit() {
    this.getSpaces();
  }

  ngOnChanges() {
    console.log(this._day);
    if (this._day !== undefined) {
      this.getBookings(this._day.id).subscribe(
        bookings => this.updateSpaces(bookings);
      )
    }
  }

}
