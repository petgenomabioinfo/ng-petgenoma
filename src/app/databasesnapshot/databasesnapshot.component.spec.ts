import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasesnapshotComponent } from './databasesnapshot.component';

describe('DatabasesnapshotComponent', () => {
  let component: DatabasesnapshotComponent;
  let fixture: ComponentFixture<DatabasesnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabasesnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasesnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
