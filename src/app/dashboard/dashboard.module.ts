import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from '../projects-list/projects-list.component';
import { ProjectsStatsComponent } from '../projects-stats/projects-stats.component';

@NgModule({
  declarations: [ProjectsListComponent, ProjectsStatsComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectsListComponent, ProjectsStatsComponent]
})
export class DashboardModule { }
