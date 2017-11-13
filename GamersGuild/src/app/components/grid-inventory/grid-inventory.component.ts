import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CardService, Card } from '../../services/card.service';

@Component({
  selector: 'app-grid-inventory',
  templateUrl: './grid-inventory.component.html',
  styleUrls: ['./grid-inventory.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridInventoryComponent implements OnInit {
  cards: Array<any>;

  constructor(private cardService: CardService) {
    this.cards = this.cardService.getCards();
   }

  ngOnInit() {
  }

}
