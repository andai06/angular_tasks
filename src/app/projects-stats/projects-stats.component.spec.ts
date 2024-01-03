import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsStatsComponent } from './projects-stats.component';

describe('ProjectsStatsComponent', () => {
  let component: ProjectsStatsComponent;
  let fixture: ComponentFixture<ProjectsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
