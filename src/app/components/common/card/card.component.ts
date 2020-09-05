import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../../../models/mission.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() mission: Mission;
  constructor() { }

  ngOnInit() {
  }
 
}
