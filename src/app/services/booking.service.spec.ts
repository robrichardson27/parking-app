import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../models/booking';
import { BookingService } from './booking.service';
import { MessageService } from '../message.service';

describe('BookingService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let bookingService: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test and its dependencies
      providers: [BookingService, MessageService]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    bookingService = TestBed.get(BookingService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending  requests.
    httpTestingController.verify();
  });

  /// BookingService method tests begin ///

  describe('#getBookings', () => {
    let expectedBookings: Booking[];
    const dayId: number;

    beforeEach(() => {
      bookingService = TestBed.get(BookingService);
      dayId = 0;
      expectedBookings = [
        { id: 0, userId: 'test@test.con', spaceId: 0, dayId: 0 }
      ] as Booking[];
    });

    it('should return expected bookings (called once)', () => {

      bookingService.getBookings(dayId).subscribe(
        bookings => expect(bookings).toEqual(expectedBookings, 'should return expected bookings'),
        fail
      );

      // HeroService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne(bookingService._bookingsUrl);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedBookings);
    });

  });

});
