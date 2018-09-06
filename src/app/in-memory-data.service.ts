import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookings = [
      { id: 11, userId: 0, spaceId: 0, dayId: 0 },
      { id: 12, userId: 0, spaceId: 1, dayId: 0 },
      { id: 13, userId: 0, spaceId: 2, dayId: 0 },
      { id: 14, userId: 0, spaceId: 0, dayId: 1 },
      { id: 15, userId: 0, spaceId: 1, dayId: 1 },
      { id: 16, userId: 0, spaceId: 2, dayId: 1 },
      { id: 17, userId: 0, spaceId: 1, dayId: 2 },
      { id: 18, userId: 0, spaceId: 2, dayId: 2 },
      { id: 19, userId: 0, spaceId: 0, dayId: 3 },
      { id: 20, userId: 0, spaceId: 1, dayId: 4 },
      { id: 21, userId: 0, spaceId: 2, dayId: 5 },
      { id: 22, userId: 0, spaceId: 0, dayId: 6 }
    ];
    return {bookings};
  }
}
