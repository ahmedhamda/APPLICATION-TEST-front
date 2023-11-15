import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheparentrepriseComponent } from './rechercheparentreprise.component';

describe('RechercheparentrepriseComponent', () => {
  let component: RechercheparentrepriseComponent;
  let fixture: ComponentFixture<RechercheparentrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheparentrepriseComponent]
    });
    fixture = TestBed.createComponent(RechercheparentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
