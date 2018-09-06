import { Component, OnInit, Input } from '@angular/core';
import { Space } from '../../models/space';

@Component({
  selector: 'app-parking-space',
  templateUrl: './parking-space.component.html',
  styleUrls: ['./parking-space.component.css']
})
export class ParkingSpaceComponent implements OnInit {

  @Input() spaces: Space[];

  selectedSpace: Space;

  constructor() { }
  // TODO: onClick book space
  ngOnInit() {
  }

}
