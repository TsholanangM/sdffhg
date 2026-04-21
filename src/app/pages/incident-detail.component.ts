// Standalone page component for incident details.
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Incident } from '../entities/incident';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-incident-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-header">
      <a routerLink="/incidents" class="back-link">← Back to Incidents</a>
      <h1>Incident Detail</h1>
    </section>

    <section *ngIf="incident; else notFound" class="split-grid">
      <article class="card">
        <h3>{{ incident.title }}</h3>
        <p><strong>ID:</strong> {{ incident.id }}</p>
        <p><strong>Owner:</strong> {{ incident.owner }}</p>
        <p><strong>Severity:</strong> <span class="badge" [ngClass]="severityClass(incident.severity)">{{ incident.severity }}</span></p>
        <p><strong>Status:</strong> {{ incident.status }}</p>
        <p><strong>Created:</strong> {{ incident.createdAt }}</p>
      </article>

      <article class="card">
        <h3>Response Timeline</h3>
        <ul class="list">
          <li>08:14 — Detection rule triggered in SIEM.</li>
          <li>08:17 — SOC analyst acknowledged and opened incident.</li>
          <li>08:30 — Containment actions initiated for affected accounts.</li>
          <li>08:46 — Forensic artifacts collected for review.</li>
        </ul>
      </article>
    </section>

    <ng-template #notFound>
      <section class="card">
        <h3>Incident not found</h3>
        <p>The requested incident ID does not exist in the current data set.</p>
      </section>
    </ng-template>
  `,
})
export class IncidentDetailComponent {
  protected incident: Incident | undefined;

  constructor(route: ActivatedRoute, incidentsService: IncidentsService) {
    const incidentId = route.snapshot.paramMap.get('id');
    this.incident = incidentsService.getIncidentById(incidentId ?? '');
  }

  protected severityClass(severity: Incident['severity']): string {
    if (severity === 'Critical') return 'danger';
    if (severity === 'High') return 'warning';
    if (severity === 'Medium') return 'info';
    return 'success';
  }
}
