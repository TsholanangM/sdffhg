// Standalone page component for the Threats view.
import { Component } from '@angular/core';

@Component({
  selector: 'app-threats',
  standalone: true,
  template: `
    <section class="page-header">
      <h1>Threat Intelligence</h1>
      <p>Prioritized threat feed with confidence and recommended action.</p>
    </section>

    <section class="split-grid">
      <article class="card">
        <h3>Top Threats</h3>
        <ul class="list">
          <li><strong>Phishing Kit Variant X</strong> — Confidence 92%, targets finance users</li>
          <li><strong>RAT Signature #R-339</strong> — Confidence 88%, lateral movement behavior</li>
          <li><strong>Zero-day rumor CVE-2026-1184</strong> — Confidence 61%, monitor advisories</li>
        </ul>
      </article>

      <article class="card">
        <h3>Recommended Actions</h3>
        <ul class="list">
          <li>Raise email filtering to strict mode for risky domains</li>
          <li>Block known malicious hashes across endpoints</li>
          <li>Run targeted scans on high-value application servers</li>
        </ul>
      </article>
    </section>
  `,
  selector: 'app-Threats',
  standalone: true,
  template: '<section><h1>Threats</h1><p>Threats page works.</p></section>',
})
export class ThreatsComponent {}
