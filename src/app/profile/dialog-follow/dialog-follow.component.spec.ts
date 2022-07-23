import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogFollowComponent} from './dialog-follow.component';

describe('DialogFollowComponent', () => {
  let component: DialogFollowComponent;
  let fixture: ComponentFixture<DialogFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogFollowComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
