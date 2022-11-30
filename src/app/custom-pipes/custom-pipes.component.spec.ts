import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomPipesComponent } from './custom-pipes.component';
import { FilesizePipe } from './filesize.pipe';

describe('CustomPipesComponent', () => {
  let component: CustomPipesComponent;
  let fixture: ComponentFixture<CustomPipesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPipesComponent, FilesizePipe ],
      providers: [ FilesizePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
