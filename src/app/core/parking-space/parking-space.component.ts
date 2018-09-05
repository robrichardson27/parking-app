import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../../services/space.service';
import { Space } from '../../models/space';

@Component({
  selector: 'app-parking-space',
  templateUrl: './parking-space.component.html',
  styleUrls: ['./parking-space.component.css']
})
export class ParkingSpaceComponent implements OnInit {

  spaces: Space[];
  selectedSpace: Space;

  constructor(private spaceService: SpaceService) { }

  getSpaces(): void {
    this.spaceService.getSpaces()
      .subscribe(spaces => this.spaces = spaces);
  }

  onSelect(space: Space): void {
    this.selectedSpace = space;
  }

  ngOnInit() {
    this.getSpaces();
  }


}
