export class Project {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: ProjectStatus;
  
    constructor(id: number, name: string, description: string, startDate: Date, endDate: Date, status: ProjectStatus) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.startDate = startDate;
      this.endDate = endDate;
      this.status = status;
    }
  }
  
  export enum ProjectStatus {
    NotStarted = 'En préparation',
    InProgress = 'En cours',
    Completed = 'Terminé',
    OnHold = 'En attente'
  }
  