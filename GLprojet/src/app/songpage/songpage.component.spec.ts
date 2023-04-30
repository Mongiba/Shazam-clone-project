import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongpageComponent } from './songpage.component';

describe('SongpageComponent', () => {
  let component: SongpageComponent;
  let fixture: ComponentFixture<SongpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
