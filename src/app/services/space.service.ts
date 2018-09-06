import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Space } from '../models/space';
import { SPACES } from '../mocks/mock-spaces';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor() { }

  getSpaces(): Observable<Space[]> {
    return of(SPACES);
  }
}
