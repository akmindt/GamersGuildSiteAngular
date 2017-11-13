import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInventoryComponent } from './grid-inventory.component';

describe('GridInventoryComponent', () => {
  let component: GridInventoryComponent;
  let fixture: ComponentFixture<GridInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
