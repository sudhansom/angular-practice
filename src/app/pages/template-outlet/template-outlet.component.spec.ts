import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletComponent } from './template-outlet.component';

describe('TemplateOutletComponent', () => {
  let component: TemplateOutletComponent;
  let fixture: ComponentFixture<TemplateOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateOutletComponent]
    });
    fixture = TestBed.createComponent(TemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
