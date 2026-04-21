// Standalone page component for the Remediation view.
import { Component } from '@angular/core';

@Component({
  selector: 'app-remediation',
  standalone: true,
  template: `
    <section class="page-header">
      <h1>Remediation Center</h1>
      <p>Operational scripts and latest remediation execution status.</p>
    </section>

    <section class="split-grid">
      <article class="card">
        <h3>Recent Executions</h3>
        <ul class="list">
          <li>Block malicious IP list — <span class="badge success">Succeeded</span></li>
          <li>Disable compromised account set — <span class="badge success">Succeeded</span></li>
          <li>Isolate endpoint SRV-112 — <span class="badge warning">Manual validation</span></li>
        </ul>
      </article>

      <article class="card">
        <h3>Automation Backlog</h3>
        <ul class="list">
          <li>Add rollback workflow for firewall policy updates</li>
          <li>Automate IOC enrichment before script execution</li>
          <li>Alert app team after containment script completion</li>
        </ul>
      </article>
    </section>
  `,
})
export class RemediationComponent {}
