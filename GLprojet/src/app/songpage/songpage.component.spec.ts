import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPageComponent } from './songpage.component';

describe('SongpageComponent', () => {
  let component: SongPageComponent;
  let fixture: ComponentFixture<SongPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
