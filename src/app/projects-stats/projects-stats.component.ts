import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-stats',
  templateUrl: './projects-stats.component.html',
  styleUrl: './projects-stats.component.scss'
})
export class ProjectsStatsComponent {
  @Input({required: true}) notStarted!: number;
  @Input({required: true}) inProgress!: number;
  @Input({required: true}) completed!: number;
  @Input({required: true}) onHold!: number;
}
