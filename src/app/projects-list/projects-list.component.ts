import { Component, Input, OnInit } from '@angular/core';
import { Project, ProjectStatus } from '../models/Project';
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent implements OnInit {
  @Input({required: true}) projects!: Project[];
 /*  projects: Project[] = [
    new Project(1, 'dipset', 'cldj e ehuhe', new Date(), new Date(), ProjectStatus.NotStarted),
    new Project(1, 'sokomadiko', 'cldj e ehuhe', new Date(), new Date(), ProjectStatus.InProgress),
  ] */

  ngOnInit(): void {
    
  }
}

