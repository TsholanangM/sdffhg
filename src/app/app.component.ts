// Root shell component with sidebar navigation and routed content area.
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="shell">
      <aside>
        <h2>IR Dashboard</h2>
        <a routerLink="/dashboard" routerLinkActive="active-link">Dashboard</a>
        <a routerLink="/incidents" routerLinkActive="active-link">Incidents</a>
        <a routerLink="/incident-response" routerLinkActive="active-link">Incident Response</a>
        <a routerLink="/threats" routerLinkActive="active-link">Threats</a>
        <a routerLink="/predictions" routerLinkActive="active-link">Predictions</a>
        <a routerLink="/remediation" routerLinkActive="active-link">Remediation</a>
        <a routerLink="/playbook-creator" routerLinkActive="active-link">Playbook Creator</a>
        <a routerLink="/activity-logs" routerLinkActive="active-link">Activity Logs</a>
        <a routerLink="/systems" routerLinkActive="active-link">Systems</a>
        <a routerLink="/billing" routerLinkActive="active-link">Billing</a>
        <a routerLink="/settings" routerLinkActive="active-link">Settings</a>
        <a routerLink="/ai-ingestion" routerLinkActive="active-link">AI Ingestion</a>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/incidents">Incidents</a>
        <a routerLink="/incident-response">Incident Response</a>
        <a routerLink="/threats">Threats</a>
        <a routerLink="/predictions">Predictions</a>
        <a routerLink="/remediation">Remediation</a>
        <a routerLink="/playbook-creator">Playbook Creator</a>
        <a routerLink="/activity-logs">Activity Logs</a>
        <a routerLink="/systems">Systems</a>
        <a routerLink="/billing">Billing</a>
        <a routerLink="/settings">Settings</a>
        <a routerLink="/ai-ingestion">AI Ingestion</a>
      </aside>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppComponent {}
