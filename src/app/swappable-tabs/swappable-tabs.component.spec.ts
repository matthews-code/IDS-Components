import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwappableTabsComponent } from './swappable-tabs.component';

describe('SwappableTabsComponent', () => {
  let component: SwappableTabsComponent;
  let fixture: ComponentFixture<SwappableTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwappableTabsComponent]
    });
    fixture = TestBed.createComponent(SwappableTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
