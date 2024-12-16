import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmNotificationsComponent } from './alarm-notifications.component';

describe('AlarmNotificationsComponent', () => {
  let component: AlarmNotificationsComponent;
  let fixture: ComponentFixture<AlarmNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlarmNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
