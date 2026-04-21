// Standalone page component for the Dashboard view.
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section class="page-header">
      <h1>Security Operations Dashboard</h1>
      <p>Live overview of incidents, threats, and automation coverage.</p>
    </section>

    <section class="kpi-grid">
      <article class="card kpi danger">
        <h2>12</h2>
        <p>Open Incidents</p>
      </article>
      <article class="card kpi warning">
        <h2>4</h2>
        <p>High-Risk Threats</p>
      </article>
      <article class="card kpi success">
        <h2>31</h2>
        <p>Automated Remediations</p>
      </article>
      <article class="card kpi">
        <h2>99.93%</h2>
        <p>System Uptime</p>
      </article>
    </section>

    <section class="split-grid">
      <article class="card">
        <h3>Incident Queue</h3>
        <ul class="list">
          <li><strong>INC-2041</strong> Credential stuffing detected on customer portal</li>
          <li><strong>INC-2040</strong> Malware beacon blocked at network edge</li>
          <li><strong>INC-2038</strong> Privileged login anomaly under investigation</li>
        </ul>
      </article>

      <article class="card">
        <h3>Analyst Tasks</h3>
        <ul class="list">
          <li>Review AI triage recommendations for new alerts</li>
          <li>Validate containment status for INC-2041</li>
          <li>Publish updated phishing response playbook</li>
        </ul>
      </article>
    </section>
  `,
  selector: 'app-Dashboard',
  standalone: true,
  template: '<section><h1>Dashboard</h1><p>Dashboard page works.</p></section>',
})
export class DashboardComponent {}
