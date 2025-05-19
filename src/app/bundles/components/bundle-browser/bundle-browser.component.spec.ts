import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleBrowserComponent } from './bundle-browser.component';

describe('BundleBrowserComponent', () => {
  let component: BundleBrowserComponent;
  let fixture: ComponentFixture<BundleBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleBrowserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
