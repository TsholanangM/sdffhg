// In-memory incident data service used for prototyping and UI wiring.
import { Injectable } from '@angular/core';
import { Incident } from '../entities/incident';

@Injectable({
  providedIn: 'root',
})
export class IncidentsService {
  private readonly incidents: Incident[] = [
    {
      id: 'INC-2041',
      title: 'Credential stuffing campaign',
      severity: 'Critical',
      owner: 'A. Dlamini',
      status: 'Containment',
      createdAt: '2026-04-20 08:12',
    },
    {
      id: 'INC-2040',
      title: 'Malware C2 callback',
      severity: 'High',
      owner: 'T. Nkosi',
      status: 'Eradication',
      createdAt: '2026-04-20 07:31',
    },
    {
      id: 'INC-2039',
      title: 'Suspicious privileged sign-in',
      severity: 'Medium',
      owner: 'K. Mokoena',
      status: 'Investigation',
      createdAt: '2026-04-19 22:48',
    },
    {
      id: 'INC-2037',
      title: 'Possible data exfiltration over DNS',
      severity: 'High',
      owner: 'L. Naidoo',
      status: 'Containment',
      createdAt: '2026-04-19 19:04',
    },
    {
      id: 'INC-2034',
      title: 'Legacy host vulnerability exploitation',
      severity: 'Low',
      owner: 'S. Mthembu',
      status: 'Recovered',
      createdAt: '2026-04-18 16:27',
    },
  ];

  getIncidents(): Incident[] {
    return this.incidents;
  }

  getIncidentById(id: string): Incident | undefined {
    return this.incidents.find((incident) => incident.id === id);
  }
}

