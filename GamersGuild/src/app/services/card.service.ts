import { Injectable } from '@angular/core';

export class Card {
  constructor(
    public name: string,
    public set: string,
    public formats: string[],
    public price: number,
    public imgUrl: string
  ){}
}

@Injectable()
export class CardService {
  getCards(): Card[]{
    return cards.map(c => new Card(c.name, c.set, c.formats, c.price, c.imgUrl));
  }
}

const cards = [
  {
    'name': 'Lightning Bolt',
    'set': 'Beta',
    'formats': ['Commander', 'Legacy', 'Modern', 'Vintage'],
    'price': 150.00,
    'imgUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=504&type=card'
  },
  {
    'name': 'Lightning Bolt',
    'set': 'Unlimited',
    'formats': ['Commander', 'Legacy', 'Modern', 'Vintage'],
    'price': 3.25,
    'imgUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=806&type=card'
  },
  {
    'name': 'Black Lotus',
    'set': 'Unlimited',
    'formats': ['Vintage'],
    'price': 1252.45,
    'imgUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card'
  },
  {
    'name': 'Black Lotus',
    'set': 'Unlimited',
    'formats': ['Vintage'],
    'price': 1252.45,
    'imgUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card'
  },
  {
    'name': 'Lightning Bolt',
    'set': 'Beta',
    'formats': ['Commander', 'Legacy', 'Modern', 'Vintage'],
    'price': 150.00,
    'imgUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=504&type=card'
  },
  {
    'name': 'Lightning Bolt',
    'set': 'Unlimited',
    'formats': ['Commander', 'Legacy', 'Modern', 'Vintage'],
    'price': 3.25,
    'imgUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=806&type=card'
  },
  {
    'name': 'Black Lotus',
    'set': 'Unlimited',
    'formats': ['Vintage'],
    'price': 1252.45,
    'imgUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card'
  },
  {
    'name': 'Black Lotus',
    'set': 'Unlimited',
    'formats': ['Vintage'],
    'price': 1252.45,
    'imgUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card'
  }
]
