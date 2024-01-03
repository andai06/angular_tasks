import { Component, OnInit } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Project, ProjectStatus } from './models/Project';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'taks';
  projects: Project[] = [
    new Project(1, 'dipset', 'cldj e ehuhe', new Date(), new Date(), ProjectStatus.NotStarted),
    new Project(1, 'sokomadiko', 'cldj e ehuhe', new Date(), new Date(), ProjectStatus.InProgress),
  ]
  notStarted: number = 0;
  inProgress: number = 0;
  completed: number = 0;
  onHold: number = 0;

  calculateProjectCounts(): void {
    // Parcourir tous les projets et compter leur statut
    this.projects.forEach((project: Project) => {
      console.log('project', project);
      switch (project.status) {
        case ProjectStatus.NotStarted:
          this.notStarted++;
          break;
        case ProjectStatus.InProgress:
          this.inProgress++;
          break;
        case ProjectStatus.Completed:
          this.completed++;
          break;
        case ProjectStatus.OnHold:
          this.onHold++;
          break;
      }
    });
  }

  ngOnInit(): void {
    this.calculateProjectCounts()
  }
}
