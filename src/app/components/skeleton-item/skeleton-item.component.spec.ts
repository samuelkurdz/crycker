import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonItemComponent } from './skeleton-item.component';

describe('SkeletonItemComponent', () => {
  let component: SkeletonItemComponent;
  let fixture: ComponentFixture<SkeletonItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonItemComponent]
    });
    fixture = TestBed.createComponent(SkeletonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
