import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalFlow } from './conditional-flow';

describe('ConditionalFlow', () => {
  let component: ConditionalFlow;
  let fixture: ComponentFixture<ConditionalFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
