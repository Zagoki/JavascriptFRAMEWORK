import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategoriesComponent } from './recipe-categories.component';

describe('RecipeCategoriesComponent', () => {
  let component: RecipeCategoriesComponent;
  let fixture: ComponentFixture<RecipeCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
