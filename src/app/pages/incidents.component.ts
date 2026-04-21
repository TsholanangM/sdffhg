// Standalone page component for the Incidents view.
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Incident, IncidentSeverity, IncidentStatus } from '../entities/incident';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-header">
      <h1>Incidents</h1>
      <p>Track status, severity, ownership, and response progress for active security cases.</p>
    </section>

    <section class="card filter-bar">
      <label>
        Severity
        <select [value]="severityFilter" (change)="onSeverityChange($event)">
          <option value="All">All</option>
          <option *ngFor="let severity of severities" [value]="severity">{{ severity }}</option>
        </select>
      </label>

      <label>
        Status
        <select [value]="statusFilter" (change)="onStatusChange($event)">
          <option value="All">All</option>
          <option *ngFor="let status of statuses" [value]="status">{{ status }}</option>
        </select>
      </label>

      <p class="filter-summary">Showing {{ filteredIncidents.length }} of {{ incidents.length }} incidents</p>
    </section>

    <section class="card">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Severity</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let incident of filteredIncidents" [routerLink]="['/incidents', incident.id]" class="clickable-row">
            <td>{{ incident.id }}</td>
            <td>{{ incident.title }}</td>
            <td>
              <span class="badge" [ngClass]="severityClass(incident.severity)">{{ incident.severity }}</span>
            </td>
            <td>{{ incident.owner }}</td>
            <td>{{ incident.status }}</td>
            <td>{{ incident.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
})
export class IncidentsComponent {
  protected readonly incidents: Incident[];
  protected readonly severities: IncidentSeverity[] = ['Critical', 'High', 'Medium', 'Low'];
  protected readonly statuses: IncidentStatus[] = ['Investigation', 'Containment', 'Eradication', 'Recovered'];

  protected severityFilter: IncidentSeverity | 'All' = 'All';
  protected statusFilter: IncidentStatus | 'All' = 'All';

  constructor(private readonly incidentsService: IncidentsService) {
    this.incidents = this.incidentsService.getIncidents();
  }

  protected get filteredIncidents(): Incident[] {
    return this.incidents.filter((incident) => {
      const matchesSeverity = this.severityFilter === 'All' || incident.severity === this.severityFilter;
      const matchesStatus = this.statusFilter === 'All' || incident.status === this.statusFilter;
      return matchesSeverity && matchesStatus;
    });
  }

  protected onSeverityChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.severityFilter = value as IncidentSeverity | 'All';
  }

  protected onStatusChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.statusFilter = value as IncidentStatus | 'All';
  }

  protected severityClass(severity: IncidentSeverity): string {
    if (severity === 'Critical') return 'danger';
    if (severity === 'High') return 'warning';
    if (severity === 'Medium') return 'info';
    return 'success';
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-Incidents',
  standalone: true,
  template: '<section><h1>Incidents</h1><p>Incidents page works.</p></section>',
})
export class IncidentsComponent {}
