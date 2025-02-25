import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueThoughtsComponent } from './colleague-thoughts.component';

describe('ColleagueThoughtsComponent', () => {
  let component: ColleagueThoughtsComponent;
  let fixture: ComponentFixture<ColleagueThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleagueThoughtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColleagueThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
