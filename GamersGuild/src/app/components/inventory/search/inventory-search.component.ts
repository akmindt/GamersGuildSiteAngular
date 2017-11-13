import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inventory-search',
  templateUrl: './inventory-search.component.html',
  styleUrls: ['./inventory-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InventorySearchComponent implements OnInit {

  sets = [
    {value: 'Alpha', viewValue: 'Alpha'},
    {value: 'Beta', viewValue: 'Beta'},
    {value: 'UNL', viewValue: 'Unlimited'},
    {value: '3ED', viewValue: 'Revised'},
    {value: '4ED', viewValue: '4th Edition'}];
  formats = [
    {value: 'EDH', viewValue: 'Commander'},
    {value: 'LCY', viewValue: 'Legacy'},
    {value: 'MDN', viewValue: 'Modern'},
    {value: 'STD', viewValue: 'Standard'},
    {value: 'VIN', viewValue: 'Vintage'}];

  priceRanges = [
    {value: '0', viewValue: '$0-$5'},
    {value: '5', viewValue: '$5-$10'},
    {value: '10', viewValue: '$10-$20'},
    {value: '20', viewValue: '$20-$50'},
    {value: '50', viewValue: '$50+'}
  ]

  submitted = false;

  onSubmit(){this.submitted = true;}

  constructor() { }

  ngOnInit() {
  }

}
