import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyAnalysisComponent } from './frequency-analysis.component';

describe('FrequencyAnalysisComponent', () => {
  let component: FrequencyAnalysisComponent;
  let fixture: ComponentFixture<FrequencyAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
