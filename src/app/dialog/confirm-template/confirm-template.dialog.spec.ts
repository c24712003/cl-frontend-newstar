import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTemplateDialog } from './confirm-template.dialog';

describe('ConfirmTemplateComponent', () => {
  let component: ConfirmTemplateDialog;
  let fixture: ComponentFixture<ConfirmTemplateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmTemplateDialog]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTemplateDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
