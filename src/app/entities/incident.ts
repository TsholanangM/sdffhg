// Typed model describing Incident records used across the app.
export type IncidentSeverity = 'Critical' | 'High' | 'Medium' | 'Low';
export type IncidentStatus = 'Investigation' | 'Containment' | 'Eradication' | 'Recovered';

export interface Incident {
  id: string;
  title: string;
  severity: IncidentSeverity;
  owner: string;
  status: IncidentStatus;
  createdAt: string;
export interface Incident {
  id?: string;
  name?: string;
  [key: string]: unknown;
}
