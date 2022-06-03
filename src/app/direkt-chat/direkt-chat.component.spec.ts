import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirektChatComponent } from './direkt-chat.component';

describe('DirektChatComponent', () => {
  let component: DirektChatComponent;
  let fixture: ComponentFixture<DirektChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirektChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirektChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
